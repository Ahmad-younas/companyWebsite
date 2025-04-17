'use client';

import Navbar from '../components/Navbar';

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
          <p className="text-lg text-gray-700 mb-6">
            Get in touch with us to discuss how we can help transform your business.
          </p>
          {/* Add contact form or contact information here */}
        </div>
      </div>
    </main>
  );
} 