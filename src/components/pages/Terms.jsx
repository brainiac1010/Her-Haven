import React from "react";

const Terms = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-16 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">
          Terms & Conditions
        </h2>

        <p className="mb-6 text-sm">
          Welcome to our website. By accessing or using this website, you agree
          to be bound by the following terms and conditions. Please read them
          carefully.
        </p>

        <div className="space-y-4 text-sm">
          <p>
            <strong>1. Acceptance of Terms:</strong> By using this website, you
            acknowledge that you have read, understood, and agree to be bound by
            these Terms & Conditions.
          </p>

          <p>
            <strong>2. Intellectual Property:</strong> All content, design,
            graphics, and code on this website are the intellectual property of
            Arman Hossain unless otherwise stated. Unauthorized use is strictly
            prohibited.
          </p>

          <p>
            <strong>3. Use of Website:</strong> You agree to use this website
            only for lawful purposes and in a way that does not infringe the
            rights of others or restrict their use and enjoyment of the site.
          </p>

          <p>
            <strong>4. Limitation of Liability:</strong> We make no warranties
            or guarantees regarding the content or availability of this site and
            are not liable for any direct or indirect damages resulting from its
            use.
          </p>

          <p>
            <strong>5. Changes to Terms:</strong> These terms may be updated at
            any time. Continued use of the site signifies your acceptance of any
            changes.
          </p>
        </div>

        <p className="mt-10 text-sm text-gray-600 text-center italic">
          This website is made by <strong>Arman Hossain</strong>.
        </p>
      </div>
    </section>
  );
};

export default Terms;
