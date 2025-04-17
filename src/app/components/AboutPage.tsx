'use client';
import React from 'react';
import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';
import { 
  FaHandHoldingHeart, 
  FaBalanceScale, 
  FaBolt, 
  FaBookReader, 
  FaHandshake, 
  FaUsers 
} from 'react-icons/fa';
import { useCounterAnimation } from './hooks/useCounterAnimation';
import Navbar from './Navbar';
import Footer from './Footer';

const StatItem = ({ end, label }: { end: number; label: string }) => {
  const { count, countRef } = useCounterAnimation(end);
  
  return (
    <div>
      <div ref={countRef} className="text-4xl font-bold mb-2">
        {count}+
      </div>
      <div className="text-blue-200">{label}</div>
    </div>
  );
};

const ValueItem = ({ 
  number, 
  title, 
  description, 
  icon 
}: { 
  number: string; 
  title: string; 
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="grid md:grid-cols-12 gap-8 items-start transition-all duration-300 hover:translate-x-2">
      <div className="md:col-span-3">
        <div className="flex items-center gap-4">
          <span className="text-5xl font-light text-gray-400">{number}</span>
          <div className="text-blue-600 text-4xl">{icon}</div>
        </div>
      </div>
      <div className="md:col-span-9">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const AboutPage = () => {
  const stats = [
    { end: 18, label: 'Years of Excellence' },
    { end: 500, label: 'Projects Delivered' },
    { end: 200, label: 'Team Members' },
    { end: 50, label: 'Global Clients' },
  ];

  const values = [
    {
      number: '01',
      title: 'Empathy',
      description: "Empathy is the ability to connect with others—whether colleagues, customers, or stakeholders—to understand their needs, thoughts, perspectives, and emotions, and to respond with intention, care, and concern.",
      icon: <FaHandHoldingHeart />
    },
    {
      number: '02',
      title: 'Lean',
      description: "We operate in a lean way by focusing on maximizing value for our customers from each engagement by eliminating clutter (emotional, time, & financial) and optimizing our processes, workflows, and resources.",
      icon: <FaBalanceScale />
    },
    {
      number: '03',
      title: 'Bias for action',
      description: "We value action over hesitation. With a strong sense of urgency and thoughtful execution, our teams drive progress and deliver results.",
      icon: <FaBolt />
    },
    {
      number: '04',
      title: 'Continuous learning',
      description: "We believe that learning is a continuous journey. Our commitment to growth drives us to constantly evolve—innovating, upskilling, and reskilling to enhance agility across the organization.",
      icon: <FaBookReader />
    },
    {
      number: '05',
      title: 'Ownership',
      description: "We take ownership of our work and hold ourselves accountable. Going the extra mile to support our stakeholders is not just expected - it's part of who we are.",
      icon: <FaHandshake />
    },
    {
      number: '06',
      title: 'Collaboration',
      description: "With learning at our core, we evolve, adapt, and innovate—transforming ideas into their highest potential to meet the demands of a changing world.",
      icon: <FaUsers />
    }
  ];

  return (
    <React.Fragment> 
    <div className="bg-white">
      <Navbar />
      <div className="pt-16">
        {/* Image Background Section */}
        <section className="relative h-[400px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/image2.jpg"
              alt="Background image"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 "></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white py-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
              <p className="text-xl md:text-3xl text-white max-w-2xl">
              Creating lasting business impact through forward-thinking technology and human-focused design.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[600px] shadow-xl">
                <Image
                  src="/images/image1.jpg"
                  alt="Modern office building with glass facade"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
              <div className="space-y-8">
                <h1 className="text-5xl font-bold text-black leading-tight">
                  Partnering with visionary businesses to develop, transform, and scale—since <span className="text-blue-900">2005.</span>
                </h1>
                <div className="space-y-6">
                  <p className="text-gray-700 text-lg">
                    We're a global tech services provider powering digital transformation for businesses of all sizes, from startups to Fortune 100 leaders in retail, CPG, and beyond.
                  </p>
                  <p className="text-gray-700 text-lg">
                    We're proud to be recognized as trusted partners of both Google Cloud and Microsoft, building strong alliances that enable us to deliver advanced, future-ready solutions backed by deep technical expertise. Our core capabilities span Cloud, Data & AI, custom software development, staff augmentation, and the Microsoft Power Platform. We also offer end-to-end solutions in Microsoft Dynamics 365 ERP and CRM, along with innovative flagship products designed to tackle today's most pressing business challenges
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold text-blue-900 mb-4">Our Mission</h2>
                <p className="text-gray-700">
                  To empower businesses with cutting-edge technology solutions that drive growth, 
                  efficiency, and innovation while maintaining the highest standards of quality and customer satisfaction.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold text-blue-900 mb-4">Our Vision</h2>
                <p className="text-gray-700">
                  To be the global leader in digital transformation, recognized for our innovative solutions, 
                  technical excellence, and commitment to creating lasting value for our clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section - Infographic Style */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16">Values that inspire our culture and team</h2>
            
            <div className="space-y-20 relative">
              {/* Connecting line */}
              <div className="absolute left-[2.5rem] top-[3rem] bottom-[3rem] w-0.5 bg-blue-100 hidden md:block"></div>
              
              {values.map((value, index) => (
                <ValueItem 
                  key={index}
                  number={value.number}
                  title={value.title}
                  description={value.description}
                  icon={value.icon}
                />
              ))}
            </div>
          </div>
        </section>


          {/* Message from CEO Section */}
          <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-12 gap-12 items-start">
              {/* CEO Image Column */}
              <div className="md:col-span-5">
                <div className="relative aspect-[4/5] w-full max-w-md mx-auto bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/ceo.jpg"
                    alt="Kashif Manzoor - CEO"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Message Content Column */}
              <div className="md:col-span-7">
                <div className=" py-3 px-6 inline-block mb-8">
                  <h2 className="text-3xl font-bold">Message from the CEO</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-gray-700 text-lg leading-relaxed">
                  At Confiz, our mission extends beyond business success—we strive to set a benchmark for excellence and innovation in Pakistan's IT industry by fostering a culture of continuous learning, collaboration, and advanced technology adoption.
                  </p>
                  
                  <p className="text-gray-700 text-lg leading-relaxed">
                  Of course! Here's a refined and more concise version of that statement:

                  Confiz is dedicated to cultivating a supportive environment for its exceptional talent, empowering our team to push boundaries and deliver impactful solutions. By investing in our people and embracing a forward-thinking mindset, we enhance client outcomes while contributing to the broader community and the future of technology in Pakistan.
                  </p>

                  <div className="pt-6">
                    <h3 className="text-2xl font-bold text-gray-900">Company Founder</h3>
                    <a 
                      href="https://www.linkedin.com/in/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block mt-2"
                    >
                      <FaLinkedin size={24} className="text-[#0077B5] hover:text-[#0077B5]/80" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Our Leadership Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((member) => (
                <div key={member} className="text-center">
                  <div className="w-48 h-48 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden relative">
                    {/* Placeholder for team member photos */}
                    <div className="absolute inset-0 bg-blue-100"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900">Leadership Member {member}</h3>
                  <p className="text-blue-600">Position Title</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      

        {/* Stats Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <StatItem key={index} end={stat.end} label={stat.label} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss how you can achieve your business goals through our technology solutions.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
              Contact Us
            </button>
          </div>
        </section>
      </div>
    </div>
    <Footer />
    </React.Fragment>
  );
};

export default AboutPage; 