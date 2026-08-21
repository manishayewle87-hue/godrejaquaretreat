import Link from 'next/link';

export default function SEOFooterMesh() {
  return (
    <div className="border-t border-white/5 mt-16 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <details className="group">
          <summary className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold cursor-pointer flex items-center justify-between hover:text-emerald-aqua transition-colors list-none">
            <span>Explore Pune Real Estate & Keyword Directory</span>
            <span className="transition group-open:rotate-180">
              <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
            </span>
          </summary>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-x-8 gap-y-6 text-xs text-gray-400 font-light">
            {/* Godrej The Retreat Silo */}
            <div className="flex flex-col gap-2">
              <h5 className="text-emerald-aqua font-medium mb-2 uppercase">Godrej The Retreat</h5>
              <Link href="/godrej-the-retreat-hinjewadi" className="text-white hover:text-emerald-aqua transition-colors font-medium">Godrej The Retreat Hinjewadi</Link>
              <Link href="/properties/godrej-the-retreat-price" className="hover:text-white transition-colors">The Retreat Price & Cost Sheet</Link>
              <Link href="/properties/godrej-the-retreat-floor-plan" className="hover:text-white transition-colors">The Retreat 2 & 3 BHK Layouts</Link>
              <Link href="/properties/godrej-the-retreat-brochure" className="hover:text-white transition-colors">The Retreat PDF Brochure</Link>
              <Link href="/properties/godrej-the-retreat-sample-flat" className="hover:text-white transition-colors">The Retreat Sample Flat Tour</Link>
              <Link href="/properties/godrej-the-retreat-rera" className="hover:text-white transition-colors">MahaRERA PM1260002500070</Link>
            </div>

            {/* Top Micro Markets */}
            <div className="flex flex-col gap-2">
              <h5 className="text-emerald-aqua font-medium mb-2 uppercase">Popular Markets</h5>
              <Link href="/properties/hinjewadi" className="hover:text-white transition-colors">Hinjewadi Real Estate</Link>
              <Link href="/properties/mahalunge" className="hover:text-white transition-colors">Mahalunge Real Estate</Link>
              <Link href="/properties/baner" className="hover:text-white transition-colors">Baner Properties</Link>
              <Link href="/properties/wakad" className="hover:text-white transition-colors">Wakad Flats</Link>
              <Link href="/properties/pune-real-estate-market" className="hover:text-white transition-colors">Pune Real Estate Market</Link>
            </div>
            
            {/* Top Configurations */}
            <div className="flex flex-col gap-2">
              <h5 className="text-emerald-aqua font-medium mb-2 uppercase">Configurations</h5>
              <Link href="/configurations/2-bhk-flats-in-hinjewadi" className="hover:text-white transition-colors">2 BHK in Hinjewadi</Link>
              <Link href="/configurations/3-bhk-flats-in-hinjewadi" className="hover:text-white transition-colors">3 BHK in Hinjewadi</Link>
              <Link href="/configurations/4-bhk-apartments-in-baner" className="hover:text-white transition-colors">4 BHK in Baner</Link>
              <Link href="/configurations/skyduplex-in-pune" className="hover:text-white transition-colors">Skyduplex in Pune</Link>
              <Link href="/configurations/5-bhk-villas-near-hinjewadi" className="hover:text-white transition-colors">5 BHK Villas</Link>
            </div>
            
            {/* Top Competitor Alternatives */}
            <div className="flex flex-col gap-2">
              <h5 className="text-emerald-aqua font-medium mb-2 uppercase">Comparisons</h5>
              <Link href="/clusters/vs-shapoorji-pallonji-joyville-hinjewadi" className="hover:text-white transition-colors">vs Shapoorji Pallonji</Link>
              <Link href="/clusters/vs-kumar-magnacity-pune" className="hover:text-white transition-colors">vs Kumar Magnacity</Link>
              <Link href="/clusters/vs-vyomora-pune" className="hover:text-white transition-colors">vs Vyomora</Link>
              <Link href="/clusters/vs-vtp-blue-waters-mahalunge" className="hover:text-white transition-colors">vs VTP Blue Waters</Link>
              <Link href="/clusters/vs-lodha-panache-hinjewadi" className="hover:text-white transition-colors">vs Lodha Panache</Link>
            </div>

            {/* Top IT Parks */}
            <div className="flex flex-col gap-2">
              <h5 className="text-emerald-aqua font-medium mb-2 uppercase">IT Parks</h5>
              <Link href="/properties/near-infosys-hinjewadi-phase-1" className="hover:text-white transition-colors">Near Infosys Phase 1</Link>
              <Link href="/properties/near-wipro-hinjewadi-phase-1" className="hover:text-white transition-colors">Near Wipro Circle</Link>
              <Link href="/properties/near-tcs-hinjewadi-phase-3" className="hover:text-white transition-colors">Near TCS Phase 3</Link>
              <Link href="/properties/embassy-techzone-hinjewadi" className="hover:text-white transition-colors">Near Embassy Techzone</Link>
              <Link href="/properties/quadron-business-park-hinjewadi" className="hover:text-white transition-colors">Near Quadron Park</Link>
            </div>
          </div>
        </details>
      </div>
    </div>
  );
}
