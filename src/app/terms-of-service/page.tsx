export const metadata = {
  title: "Terms of Service | Godrej Park World Hinjewadi",
  description: "Terms of Service and Conditions for the Godrej Park World Hinjewadi informational website.",
  robots: { index: false, follow: true }
};

export default function TermsOfService() {
  return (
    <div className="bg-[#F5F5F0] min-h-screen pt-32 pb-24 text-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-serif text-luxury-dark mb-8">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-12">Last Updated: {new Date().toLocaleDateString()}</p>
        
        <div className="prose prose-lg text-gray-600 font-light max-w-none space-y-8">
          <p>
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
          </p>

          <h2 className="text-2xl font-serif text-luxury-dark mt-12 mb-4">1. Informational Purposes Only</h2>
          <p>
            This website is operated by an authorized real estate channel partner and is NOT the official website of Godrej Properties. The content provided on this website is for informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
          </p>

          <h2 className="text-2xl font-serif text-luxury-dark mt-12 mb-4">2. Intellectual Property</h2>
          <p>
            The project name &quot;Godrej Park World&quot;, &quot;The Aqua Retreat&quot;, logos, images, and brand identifiers are the property of Godrej Properties. Their use on this website is strictly for promotional purposes as an authorized channel partner.
          </p>

          <h2 className="text-2xl font-serif text-luxury-dark mt-12 mb-4">3. Data Submission and Communication</h2>
          <p>
            By submitting your contact information (name, phone number, email address) via our inquiry forms or chatbot, you explicitly authorize our representatives to contact you via phone call, SMS, or WhatsApp regardless of your registration status on the National Do Not Call (NDNC) registry.
          </p>

          <h2 className="text-2xl font-serif text-luxury-dark mt-12 mb-4">4. Limitation of Liability</h2>
          <p>
            In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
          </p>
        </div>
      </div>
    </div>
  );
}
