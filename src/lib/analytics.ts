// src/lib/analytics.ts

// Define standard Meta Pixel and Google Analytics types if not present globally
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

/**
 * Fire a Conversion Event to Google Analytics & Meta Pixel
 * @param eventName The name of the event (e.g., 'generate_lead', 'quiz_completed')
 * @param params Additional payload data (e.g., lead value, configuration)
 */
export const trackConversion = (eventName: string, params?: Record<string, any>) => {
  try {
    // 1. Google Analytics Tracking (GA4)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, {
        ...params,
        send_to: 'G-XXXXXXXXXX' // Replace with actual Measurement ID
      });
      console.log(`📊 [GA4] Fired Event: ${eventName}`, params);
    }

    // 2. Meta Pixel Tracking (Facebook Ads)
    // We map custom events to standard Facebook events where applicable
    if (typeof window !== 'undefined' && window.fbq) {
      const fbEventName = eventName === 'generate_lead' ? 'Lead' : 
                          eventName === 'contact' ? 'Contact' : 'CustomEvent';
      
      if (fbEventName === 'CustomEvent') {
        window.fbq('trackCustom', eventName, params);
      } else {
        window.fbq('track', fbEventName, params);
      }
      console.log(`📊 [META] Fired Event: ${fbEventName}`, params);
    }
  } catch (error) {
    console.error('Analytics tracking failed:', error);
  }
};
