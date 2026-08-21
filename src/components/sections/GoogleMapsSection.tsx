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
              href="https://maps.app.goo.gl/tbs3QZ2P6f8f7cM88" 
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.4284897288673!2d73.7389!3d18.5913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbc056729221%3A0xc3c5f9b4c0b49f4b!2sHinjawadi%20Phase%201%2C%20Hinjawadi%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
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
