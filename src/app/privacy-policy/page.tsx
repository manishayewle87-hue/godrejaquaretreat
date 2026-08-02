export const metadata = {
  title: "Privacy Policy | Godrej Park World Hinjewadi",
  description: "Privacy Policy for Godrej Park World Hinjewadi. Learn how we collect, use, and protect your personal information.",
  robots: { index: false, follow: true }
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#F5F5F0] min-h-screen pt-32 pb-24 text-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-serif text-luxury-dark mb-8">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-12">Last Updated: {new Date().toLocaleDateString()}</p>
        
        <div className="prose prose-lg text-gray-600 font-light max-w-none space-y-8">
          <p>
            Welcome to the authorized channel partner website for Godrej Park World Hinjewadi. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
          </p>

          <h2 className="text-2xl font-serif text-luxury-dark mt-12 mb-4">1. Important Information and Who We Are</h2>
          <p>
            This website is managed by an authorized channel partner for Godrej Properties. It is solely intended for informational purposes and lead generation regarding the Godrej Park World project in Hinjewadi, Pune.
          </p>

          <h2 className="text-2xl font-serif text-luxury-dark mt-12 mb-4">2. The Data We Collect About You</h2>
          <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, operating system and platform.</li>
            <li><strong>Usage Data:</strong> includes information about how you use our website.</li>
          </ul>

          <h2 className="text-2xl font-serif text-luxury-dark mt-12 mb-4">3. How We Use Your Personal Data</h2>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To contact you regarding your inquiry about Godrej Park World.</li>
            <li>To send you brochures, pricing, or floor plans as requested.</li>
            <li>To run data analytics (via Google Analytics or Meta Pixel) to improve our website, marketing, and user experiences.</li>
          </ul>

          <h2 className="text-2xl font-serif text-luxury-dark mt-12 mb-4">4. Data Security</h2>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. We limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
          </p>
        </div>
      </div>
    </div>
  );
}
