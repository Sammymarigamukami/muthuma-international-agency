"use client";

import React from "react";

export default function PrivacyPolicy() {
    return (
    <div className="bg-gray-50 min-h-screen px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl p-8 md:p-12">
        <section className="mb-10">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Privacy Policy</h1>
            <p className="text-gray-600 leading-relaxed mb-4">
                This Privacy Policy explains how we collect, use, share, and protect information about you. 
                By interacting with our platform through websites, mobile applications, in-store services, 
                or any affiliated services, you consent to the practices described in this Privacy Policy. 
                Updates to this policy will be posted on this page to keep you informed about how your data is used.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-3">A. Our Privacy Commitment</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
                We are committed to maintaining your privacy. We take great care to safeguard the personal 
                and medical information you provide, and this notice describes how we collect, use, and share 
                information, as well as the choices you can make regarding your data.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
                Personally identifiable information (PII) includes data that can identify or contact you, such 
                as your name, home address, telephone number, and email address. It does not include aggregated 
                or de-identified information.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-3">B. Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed mb-2">
                We collect information you provide directly and information generated through your use of our 
                platform and services, including:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Account creation, purchases, bookings, surveys, loyalty programs, or customer service interactions.</li>
                <li>Device information such as IP address, hardware model, operating system, and unique device identifiers.</li>
                <li>Log information including pages visited, referral URLs, browser type, and search terms.</li>
                <li>Location information via GPS, Wi-Fi, or mobile networks when using our services.</li>
                <li>Cookies, web beacons, and similar technologies to provide features, track usage, and deliver personalized content.</li>
                <li>Information from public sources or third-party partners to improve accuracy and recommendations.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-3">C. How We Use Your Information</h2>
            <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>To fulfill orders, appointments, and service requests.</li>
                <li>To deliver marketing communications, promotions, and newsletters.</li>
                <li>To improve platform functionality, conduct research, and perform internal operations.</li>
                <li>To prevent fraud, security breaches, and other harmful activities.</li>
                <li>To comply with legal requirements and respond to regulatory inquiries.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-3">D. How We Share Your Information</h2>
            <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>With service providers for tasks like analytics, customer support, marketing, and operational services.</li>
                <li>With third-party partners to enhance our platform or provide additional services.</li>
                <li>As required by law or to protect our legal rights, safety, and security.</li>
                <li>During business transactions such as mergers, acquisitions, or sales of assets.</li>
                <li>Non-identifiable or aggregate information may be shared for lawful purposes.</li>
                <li>With your consent or direction for specific purposes.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-3">E. Your Choices</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
                You can manage how we communicate with you and how your data is used:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Opt-out of marketing emails, SMS, or push notifications through your account settings or by following unsubscribe instructions.</li>
                <li>Manage cookies, web beacons, and other tracking technologies through your browser settings.</li>
                <li>Access and update your personal and medical information via your account or by contacting our support team.</li>
                <li>Our services are not intended for anyone under 18. Parents or guardians may request the removal of a minor’s information.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-3">F. Third-Party Links</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
                Our platform may contain links to third-party websites or services. We are not responsible for 
                the privacy practices or content of these sites. Information you provide on third-party sites 
                is subject to their policies.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-3">G. How We Protect Your Information</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
                We use administrative, technical, and physical safeguards to protect your personal and medical 
                information. However, no system can be completely secure. Always be cautious of phishing emails 
                or requests for sensitive information; we will never ask for your password, credit card, or 
                personally identifiable information via unsolicited emails.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
                Our platform is intended for a general audience and is not directed to children under 18. 
                We do not knowingly collect personal information from minors.
            </p>
            </section>

      </div>
    </div>
    );
}