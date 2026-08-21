"use client";

import { useState, useEffect, useCallback } from 'react';
import { Lock, Download, Database, MapPin, LogOut, RefreshCw, AlertCircle } from 'lucide-react';
import { sanitizeCsvCell } from '@/lib/security';

type Lead = {
  id: string;
  name: string;
  email: string;
  phone: string;
  source: string;
  config: string;
  timestamp: string;
};

export default function AdminDashboard() {
  const [authToken, setAuthToken] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      try {
        return sessionStorage.getItem('admin_token');
      } catch {
        return null;
      }
    }
    return null;
  });
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const fetchLeadsWithToken = useCallback(async (token: string) => {
    setLoading(true);
    setErrorMessage(null);
    try {
      const res = await fetch('/api/enquiry', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 401) {
        setAuthToken(null);
        sessionStorage.removeItem('admin_token');
        setErrorMessage('Session expired. Please log in again.');
        return;
      }
      if (!res.ok) {
        throw new Error('Failed to fetch leads');
      }
      const data = await res.json();
      setLeads(data.leads || []);
    } catch (e) {
      console.error(e);
      setErrorMessage('Unable to load leads from server.');
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch leads on mount if authenticated
  useEffect(() => {
    let active = true;
    if (authToken) {
      const load = async () => {
        try {
          const res = await fetch('/api/enquiry', {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          });
          if (res.status === 401) {
            if (active) {
              setAuthToken(null);
              sessionStorage.removeItem('admin_token');
              setErrorMessage('Session expired. Please log in again.');
            }
            return;
          }
          if (res.ok) {
            const data = await res.json();
            if (active) setLeads(data.leads || []);
          }
        } catch {
          if (active) setErrorMessage('Unable to load leads from server.');
        }
      };
      load();
    }
    return () => {
      active = false;
    };
  }, [authToken]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) return;

    setIsAuthenticating(true);
    setErrorMessage(null);

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: password.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.error || 'Authentication failed. Invalid access key.');
        return;
      }

      const token = data.token;
      setAuthToken(token);
      sessionStorage.setItem('admin_token', token);
      setPassword('');
      await fetchLeadsWithToken(token);
    } catch (err) {
      console.error('Login error:', err);
      setErrorMessage('Network error during authentication.');
    } finally {
      setIsAuthenticating(false);
    }
  };

  const handleLogout = () => {
    setAuthToken(null);
    sessionStorage.removeItem('admin_token');
    setLeads([]);
  };

  const handleExportCsv = () => {
    if (leads.length === 0) {
      alert('No leads available to export.');
      return;
    }

    const headers = ['Date', 'Prospect Name', 'Phone', 'Email', 'Intent / Config', 'Source'];
    const rows = leads.map((lead) => [
      sanitizeCsvCell(new Date(lead.timestamp).toLocaleDateString()),
      sanitizeCsvCell(lead.name),
      sanitizeCsvCell(lead.phone),
      sanitizeCsvCell(lead.email || 'N/A'),
      sanitizeCsvCell(lead.config || 'N/A'),
      sanitizeCsvCell(lead.source || 'N/A'),
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map((row) => row.join(',')),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `Godrej_Park_World_Leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  if (!authToken) {
    return (
      <div className="min-h-screen bg-[#0B0C10] flex items-center justify-center p-6 text-white font-sans">
        <div className="w-full max-w-md bg-[#15181E] border border-white/10 rounded-2xl p-10 shadow-2xl flex flex-col items-center">
          <div className="w-16 h-16 bg-emerald-aqua/10 rounded-full flex items-center justify-center text-emerald-aqua mb-6">
            <Lock size={32} />
          </div>
          <h1 className="text-2xl font-serif tracking-widest uppercase mb-2">Secure Portal</h1>
          <p className="text-gray-500 font-light text-sm mb-8">Godrej Park World Operations</p>

          {errorMessage && (
            <div className="w-full mb-6 p-3 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-3 text-red-400 text-xs">
              <AlertCircle size={16} className="shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="w-full flex flex-col gap-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Access Key"
              disabled={isAuthenticating}
              className="w-full bg-black/30 border border-white/10 py-3 px-4 rounded-xl text-white outline-none focus:border-emerald-aqua transition-colors text-center tracking-widest disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isAuthenticating}
              className="w-full bg-emerald-aqua text-gray-900 py-3 rounded-xl font-semibold tracking-widest uppercase hover:bg-emerald-aqua/80 transition-colors disabled:opacity-50"
            >
              {isAuthenticating ? 'Verifying...' : 'Access Dashboard'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0C10] text-gray-300 font-sans p-6 lg:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-3xl font-serif text-white tracking-widest uppercase mb-2 flex items-center gap-3">
              <Database className="text-emerald-aqua" /> Command Center
            </h1>
            <p className="text-gray-500 font-light text-sm">Lead Capture &amp; Operations Dashboard</p>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <button
              onClick={() => authToken && fetchLeadsWithToken(authToken)}
              disabled={loading}
              className="px-6 py-2 border border-white/10 rounded-full text-xs uppercase tracking-widest hover:border-emerald-aqua hover:text-emerald-aqua transition-colors flex items-center gap-2 disabled:opacity-50"
            >
              <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
              {loading ? 'Refreshing...' : 'Refresh Data'}
            </button>
            <button
              onClick={handleExportCsv}
              className="px-6 py-2 bg-emerald-aqua text-gray-900 rounded-full text-xs uppercase tracking-widest font-semibold flex items-center gap-2 hover:bg-emerald-aqua/80 transition-colors"
            >
              <Download size={14} /> Export CSV
            </button>
            <button
              onClick={handleLogout}
              className="p-2 border border-white/10 rounded-full text-gray-400 hover:text-white hover:border-white/30 transition-colors"
              title="Log out"
            >
              <LogOut size={16} />
            </button>
          </div>
        </div>

        {errorMessage && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-3 text-red-400 text-sm">
            <AlertCircle size={18} className="shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#15181E] border border-white/5 p-8 rounded-2xl">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Total Leads</p>
            <p className="text-5xl font-serif text-white">{leads.length}</p>
          </div>
          <div className="bg-[#15181E] border border-white/5 p-8 rounded-2xl">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">High Intent (EOI)</p>
            <p className="text-5xl font-serif text-emerald-aqua">{leads.filter((l) => l.config !== '').length}</p>
          </div>
          <div className="bg-[#15181E] border border-white/5 p-8 rounded-2xl">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Status</p>
            <p className="text-3xl font-serif text-white flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              Live Secure
            </p>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-[#15181E] border border-white/5 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm font-light">
              <thead className="border-b border-white/10 bg-black/20 text-gray-400 text-xs uppercase tracking-widest">
                <tr>
                  <th className="px-6 py-5">Date</th>
                  <th className="px-6 py-5">Prospect Name</th>
                  <th className="px-6 py-5">Contact</th>
                  <th className="px-6 py-5">Intent / Config</th>
                  <th className="px-6 py-5">Source</th>
                </tr>
              </thead>
              <tbody>
                {leads.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="text-center py-12 text-gray-600">
                      {loading ? 'Loading leads...' : 'No leads captured yet.'}
                    </td>
                  </tr>
                ) : (
                  leads.map((lead) => (
                    <tr key={lead.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                      <td className="px-6 py-5 whitespace-nowrap text-gray-500">
                        {new Date(lead.timestamp).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-5 font-medium text-white">{lead.name}</td>
                      <td className="px-6 py-5">
                        <div className="flex flex-col">
                          <span className="text-gray-300">{lead.phone}</span>
                          <span className="text-xs text-gray-600">{lead.email}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        {lead.config ? (
                          <span className="bg-emerald-aqua/20 text-emerald-aqua px-3 py-1 rounded-full text-[10px] uppercase tracking-widest">
                            {lead.config}
                          </span>
                        ) : (
                          <span className="text-gray-600">-</span>
                        )}
                      </td>
                      <td className="px-6 py-5 text-gray-500 flex items-center gap-2">
                        <MapPin size={14} className="text-emerald-aqua" /> {lead.source}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
