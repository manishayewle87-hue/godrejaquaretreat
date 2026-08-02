export const metadata = {
  title: "MahaRERA Disclaimer | Godrej Park World Hinjewadi",
  description: "Mandatory MahaRERA compliance disclaimer for Godrej Park World Hinjewadi channel partner website.",
  robots: { index: false, follow: true }
};

export default function Disclaimer() {
  return (
    <div className="bg-[#F5F5F0] min-h-screen pt-32 pb-24 text-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-serif text-luxury-dark mb-8">MahaRERA Disclaimer</h1>
        
        <div className="prose prose-lg text-gray-600 font-light max-w-none space-y-8 bg-white p-8 border border-black/10 shadow-sm rounded-lg">
          <p className="font-semibold text-luxury-dark">MahaRERA Registration Number: PM1260002500070</p>
          
          <p>
            <strong>NOT AN OFFICIAL DEVELOPER WEBSITE.</strong> This website belongs to an authorized channel partner for information and marketing purposes only.
          </p>
          
          <p>
            The content on this website, including but not limited to the project details, images, pricing, and floor plans, is for informational purposes only. It does not constitute an offer, an invitation to offer, or a commitment of any nature.
          </p>
          
          <p>
            The images shown are artist's impressions and are indicative of the anticipated appearance. The actual properties may vary from the representations. Furniture, fixtures, and accessories displayed in the images are not part of the standard offering.
          </p>
          
          <p>
            By using this website or submitting your contact details, you acknowledge that you have read and understood this disclaimer. You agree that your decision to purchase or invest in the project will be based solely on your independent assessment and verification of the facts, and not solely upon the information provided on this website.
          </p>
          
          <p>
            Please visit the official MahaRERA website at <a href="https://maharera.mahaonline.gov.in" target="_blank" rel="noopener noreferrer" className="text-emerald-aqua hover:underline">https://maharera.mahaonline.gov.in</a> for official project details.
          </p>
        </div>
      </div>
    </div>
  );
}
