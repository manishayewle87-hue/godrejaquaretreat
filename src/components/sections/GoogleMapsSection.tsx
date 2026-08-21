import { MapPin, Navigation } from "lucide-react";
import Image from "next/image";

export default function GoogleMapsSection() {
  return (
    <section id="location" className="py-24 bg-white relative border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div>
            <span className="text-emerald-aqua text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
              Google Maps & Connectivity
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
              The Epicenter of <br />
              <span className="italic text-gray-500">Pune West</span>
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed font-light">
              Godrej Park World is strategically located in Hinjewadi Phase 1, offering unparalleled connectivity to the Rajiv Gandhi Infotech Park, the upcoming Metro Line 3, and the Mumbai-Bengaluru Highway. Navigate directly to our sales lounge via Google Maps.
            </p>
            
            <div className="flex flex-col gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-aqua/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-emerald-aqua w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-medium mb-1">Exact Location</h4>
                  <p className="text-gray-500 text-sm font-light">Godrej Park World, Hinjewadi Phase 1, Pune, Maharashtra 411057</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-aqua/10 flex items-center justify-center shrink-0">
                  <Navigation className="text-emerald-aqua w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-medium mb-1">Drive Time</h4>
                  <p className="text-gray-500 text-sm font-light">5 mins from Infosys Circle • 2 mins from Metro Station</p>
                </div>
              </div>
            </div>

            <a 
              href="https://www.google.com/maps/place/The+Aqua+Retreat+at+Godrej+Park+World,+Hinjawadi+%E2%80%93+Pune/@18.5790625,73.4233169,56306m/data=!3m1!1e3!4m10!1m2!2m1!1sgodrej+the+retreat!3m6!1s0x3bc2bb32c6aeb61b:0xc01e91cce72fec57!8m2!3d18.5790625!4d73.7281875!15sChJnb2RyZWogdGhlIHJldHJlYXRaFCISZ29kcmVqIHRoZSByZXRyZWF0kgEUY29uc3RydWN0aW9uX2NvbXBhbnmaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMnRrUmxOc1VsUlNSMHB4WlVVeFUxWkViRUppZW14cVlrZFdWbVF3UlJBQuABAPoBBAgAEDM!16s%2Fg%2F11xggk984v?entry=ttu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#15181E] text-white font-medium hover:bg-emerald-aqua transition-colors rounded-[32px] text-sm tracking-wide"
            >
              Get Directions on Google Maps
            </a>
          </div>

          {/* Google Maps iFrame */}
          <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <iframe 
              src="https://maps.google.com/maps?q=The+Aqua+Retreat+at+Godrej+Park+World,+Hinjawadi&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
          
        </div>
      </div>
    </section>
  );
}
