"use client";

import { useState, useEffect } from 'react';
import { Lock, Download, Database, MapPin } from 'lucide-react';

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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'godrej2026') {
      setIsAuthenticated(true);
      fetchLeads();
    } else {
      alert("Invalid credentials");
    }
  };

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/enquiry');
      if (res.ok) {
        const data = await res.json();
        setLeads(data.leads || []);
      }
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0B0C10] flex items-center justify-center p-6 text-white font-sans">
        <div className="w-full max-w-md bg-[#15181E] border border-white/10 rounded-2xl p-10 shadow-2xl flex flex-col items-center">
          <div className="w-16 h-16 bg-emerald-aqua/10 rounded-full flex items-center justify-center text-emerald-aqua mb-6">
            <Lock size={32} />
          </div>
          <h1 className="text-2xl font-serif tracking-widest uppercase mb-2">Secure Portal</h1>
          <p className="text-gray-500 font-light text-sm mb-8">Godrej Park World Operations</p>
          
          <form onSubmit={handleLogin} className="w-full flex flex-col gap-4">
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Access Key" 
              className="w-full bg-black/30 border border-white/10 py-3 px-4 rounded-xl text-white outline-none focus:border-emerald-aqua transition-colors text-center tracking-widest"
            />
            <button type="submit" className="w-full bg-emerald-aqua text-gray-900 py-3 rounded-xl font-semibold tracking-widest uppercase hover:bg-emerald-aqua/80 transition-colors">
              Access Dashboard
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
            <p className="text-gray-500 font-light text-sm">Lead Capture & Operations Dashboard</p>
          </div>
          
          <div className="flex gap-4">
            <button onClick={fetchLeads} className="px-6 py-2 border border-white/10 rounded-full text-xs uppercase tracking-widest hover:border-emerald-aqua hover:text-emerald-aqua transition-colors">
              {loading ? 'Refreshing...' : 'Refresh Data'}
            </button>
            <button className="px-6 py-2 bg-emerald-aqua text-gray-900 rounded-full text-xs uppercase tracking-widest font-semibold flex items-center gap-2 hover:bg-emerald-aqua/80 transition-colors">
              <Download size={14} /> Export CSV
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#15181E] border border-white/5 p-8 rounded-2xl">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Total Leads</p>
            <p className="text-5xl font-serif text-white">{leads.length}</p>
          </div>
          <div className="bg-[#15181E] border border-white/5 p-8 rounded-2xl">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">High Intent (EOI)</p>
            <p className="text-5xl font-serif text-emerald-aqua">{leads.filter(l => l.config !== "").length}</p>
          </div>
          <div className="bg-[#15181E] border border-white/5 p-8 rounded-2xl">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Conversion Rate</p>
            <p className="text-5xl font-serif text-white">4.2%</p>
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
                    <td colSpan={5} className="text-center py-12 text-gray-600">No leads captured yet.</td>
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
