'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CareersPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-blue-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Be part of a dynamic team that&apos;s shaping the future of technology
              </p>
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Position Card 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Senior Software Engineer</h3>
                  <p className="text-gray-600 mb-4">Full-time • Remote</p>
                  <p className="text-gray-700 mb-4">
                    Join our engineering team to build scalable solutions using cutting-edge technologies.
                  </p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>

              {/* Position Card 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">UI/UX Designer</h3>
                  <p className="text-gray-600 mb-4">Full-time • Hybrid</p>
                  <p className="text-gray-700 mb-4">
                    Create beautiful and intuitive user experiences for our products and services.
                  </p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>

              {/* Position Card 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Product Manager</h3>
                  <p className="text-gray-600 mb-4">Full-time • On-site</p>
                  <p className="text-gray-700 mb-4">
                    Lead product development from ideation to launch, working closely with cross-functional teams.
                  </p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Why Join Us</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-blue-600 text-3xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-2">Growth Opportunities</h3>
                <p className="text-gray-700">
                  Continuous learning and development through training programs, conferences, and mentorship.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-blue-600 text-3xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-2">Collaborative Culture</h3>
                <p className="text-gray-700">
                  Work in a supportive environment where your ideas are valued and innovation is encouraged.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-blue-600 text-3xl mb-4">💼</div>
                <h3 className="text-xl font-semibold mb-2">Work-Life Balance</h3>
                <p className="text-gray-700">
                  Flexible working hours, remote work options, and policies that respect your personal time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Don&apos;t See Your Role?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              We&apos;re always looking for talented individuals. Send us your resume and we&apos;ll keep you in mind for future opportunities.
            </p>
            <button className="bg-white text-blue-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Send Your Resume
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CareersPage; 