"use client";

import { useEffect } from 'react';

export default function GoogleWebVitals() {
  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    // Use PerformanceObserver to report Web Vitals directly to GA4
    if ('PerformanceObserver' in window) {
      try {
        // Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: 'LCP',
              value: Math.round(lastEntry.startTime),
              non_interaction: true,
            });
          }
        });
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

        // First Input Delay / Interaction to Next Paint (INP)
        const inpObserver = new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            if (window.gtag) {
              window.gtag('event', 'web_vitals', {
                event_category: 'Web Vitals',
                event_label: 'INP',
                value: Math.round(entry.duration),
                non_interaction: true,
              });
            }
          }
        });
        inpObserver.observe({ type: 'first-input', buffered: true });

        // Cumulative Layout Shift (CLS)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            // @ts-expect-error entry.hadRecentInput is standard for layout-shift
            if (!entry.hadRecentInput) {
              // @ts-expect-error entry.value is standard for layout-shift
              clsValue += entry.value;
            }
          }
        });
        clsObserver.observe({ type: 'layout-shift', buffered: true });

        window.addEventListener('visibilitychange', () => {
          if (document.visibilityState === 'hidden' && window.gtag && clsValue > 0) {
            window.gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: 'CLS',
              value: Math.round(clsValue * 1000),
              non_interaction: true,
            });
          }
        });
      } catch (err) {
        // Ignore unsupported observer types
      }
    }
  }, []);

  return null;
}
