"use client";

import React from "react";

export default function TermsAndConditions() {
  return (
    <div className="bg-gray-50 min-h-screen px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl p-8 md:p-12">
        <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">
          Terms & Conditions
        </h1>

        <p className="text-gray-600 mb-10 text-center max-w-2xl mx-auto">
          Welcome to <span className="font-semibold text-green-700">Muthuma International</span>. 
          By accessing or using our website, you agree to comply with and be bound by the following terms and conditions.
        </p>

        {/* 1. Introduction */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            1. Introduction
          </h2>
          <p className="text-gray-600 leading-relaxed">
            These Terms and Conditions govern your use of our website and services. 
            Please read them carefully before placing any orders. 
            If you do not agree, kindly refrain from using our platform.
          </p>
        </section>

        {/* 2. Eligibility */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            2. Eligibility
          </h2>
          <p className="text-gray-600 leading-relaxed">
            By using our platform, you confirm that you are at least 18 years old and have the legal 
            capacity to enter into binding agreements. You also agree that all information you provide 
            — whether for purchasing products, booking medical services, or accessing healthcare consultations — 
            is accurate, complete, and up-to-date. Minors or individuals without legal capacity may only 
            use the platform under the supervision of a parent or legal guardian.
           </p>
        </section>

        {/* 3. Medical Disclaimer */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            3. Medical Disclaimer
          </h2>
          <p className="text-gray-600 leading-relaxed">
            The products, services, and information provided through our platform are intended for general 
            healthcare, wellness, and informational purposes only. They are not a substitute for professional 
            medical advice, diagnosis, or treatment. Always consult a licensed healthcare provider regarding any 
            medical condition or before starting any new treatment or medication.
          </p>

        </section>

        {/* 4. Product Information */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            4. Product Information
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We strive to ensure that all product descriptions, images, and pricing information on our platform 
            are accurate. However, we do not guarantee that all content is error-free. Product availability, 
            pricing, and service offerings are subject to change without prior notice.
          </p>

        </section>

        {/* 5. Orders and Payments */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            5. Orders and Payments
          </h2>
          <p className="text-gray-600 leading-relaxed">
            All orders or service requests placed through our platform are subject to confirmation and acceptance. 
            We reserve the right to cancel or refuse any order or booking if fraudulent activity, suspicious behavior, 
            or pricing errors are detected. Payments must be made through our approved and secure payment methods.
          </p>

        </section>

        {/* 6. Prescription Policy */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            6. Prescription Policy
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Certain medications and medical products require a valid prescription from a licensed healthcare professional. 
            By placing an order for such items, you agree to provide an authentic and verifiable prescription. 
            Failure to do so may result in the cancellation of the order and refusal of service.
          </p>

        </section>

        {/* 7. Delivery and Shipping */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            7. Delivery & Shipping
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We strive to deliver products and services promptly and securely. Delivery times may vary depending 
            on your location, product availability, or the nature of the service booked. Our platform is not liable 
            for delays caused by courier services, healthcare providers, or unforeseen events beyond our control.
          </p>

        </section>

        {/* 8. Returns & Refunds */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            8. Returns & Refunds
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Due to health and safety regulations, we cannot accept returns or exchanges of opened or used 
            medical products and consumables. Refunds or replacements will only be provided for defective, 
            damaged, or incorrect items, subject to verification by our team.
          </p>
        </section>

        {/* 9. Privacy Policy */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            9. Privacy Policy
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Your privacy is important to us. All personal and medical information collected during registration, 
            orders, or service bookings will be handled in accordance with our{" "}
            <a href="/privacy" className="text-green-700 font-semibold hover:underline">
                Privacy Policy
            </a>.
          </p>

        </section>

        {/* 10. Limitation of Liability */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            10. Limitation of Liability
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our platform, its affiliates, and staff shall not be held liable for any indirect, incidental, 
            or consequential damages arising from the use or inability to use our products, services, or 
            information provided on the platform.
          </p>

        </section>

        {/* 11. Updates to Terms */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            11. Updates to Terms
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We may revise these Terms and Conditions from time to time. Updated terms will be posted on this 
            page, and your continued use of our platform, products, or services constitutes acceptance of the 
            revised terms.
          </p>

        </section>

        {/* 12. Contact Information */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            12. Contact Information
          </h2>
          <p className="text-gray-600 leading-relaxed">
            If you have any questions or concerns regarding these Terms and Conditions, please contact us at:<br />
            <span className="block mt-2 font-medium text-green-700">
                support@yourplatform.com
            </span>
          </p>

        </section>

        <div className="mt-12 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Orion Pharmacy. All rights reserved.
        </div>
      </div>
    </div>
  );
}
