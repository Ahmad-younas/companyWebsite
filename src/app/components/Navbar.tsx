'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showIdentity, setShowIdentity] = useState(false);

  const services = {
    Advisory: [
      'Discovery Workshop',
      'Market Research',
      'Technical Feasibility Study',
      'Product Strategy',
      'UI/UX Design',
      'Digital Transformation'
    ],
    Engineering: [
      'Product Development',
      'Application Development',
      'Application Modernization',
      'POC Development',
      'AI Software Development',
      'Cloud Engineering',
      'Cloud Migration'
    ],
    Optimization: [
      'Software Audit',
      'Quality Assurance',
      'Support & Maintenance'
    ],
    'Artificial Intelligence': [
      'AI Agents',
      'AI Workshop',
      'AI PoC & MVP',
      'Generative AI',
      'Machine Learning',
      'MLOps'
    ],
    'Business Enablement': [
      'Accounts & Finance',
      'HR & Recruitment',
      'Digital Marketing & Branding'
    ],
    'Engagement Models': [
      'Dedicated Team',
      'Offshore Development Center',
      'Fixed Price Projects'
    ]
  };

  const solutions = [
    'Microsoft Dynamics 365',
    'Salesforce',
    'AWS',
    'Power BI',
    'SAP',
    'ServiceNow',
    'Shopify',
    'MuleSoft'
  ];

  const expertise = [
    { name: 'UX Design' },
    { name: 'RPA' },
    { name: 'DevOps' },
    { name: 'Internet of Things' },
    { name: 'Blockchain' },
    { name: 'AR/VR/MR' },
    { name: 'Data Science', badge: 'NEXT GEN' },
    { name: 'Cybersecurity', badge: 'TRENDING' }
  ];

  const identityContent = [
    {
      title: 'About',
      description: 'A global leader in technology solutions and consulting services.',
      href: '/about'
    },
    {
      title: 'Life at Confiz',
      description: 'Become a part of a diverse and inclusive community where your ideas are valued.',
      href: '/life-at-confiz'
    },
    {
      title: 'Careers',
      description: 'Join a vibrant and dynamic culture filled with opportunities.',
      href: '/careers'
    }
  ];


  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-900">Confiz</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Our Identity Dropdown */}
            <div 
              className="static"
              onMouseEnter={() => setShowIdentity(true)}
              onMouseLeave={() => setShowIdentity(false)}
            >
              <button className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-2">
                Our Identity
                {showIdentity ? (
                  <FaChevronUp className="w-3 h-3" />
                ) : (
                  <FaChevronDown className="w-3 h-3" />
                )}
              </button>
              
              {showIdentity && (
                <div className="absolute left-0 right-0 bg-white shadow-xl" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', maxHeight: '80vh', overflow: 'hidden' }}>
                  <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="grid grid-cols-12 gap-6">
                      <div className="col-span-4 bg-gray-50 rounded-lg p-4">
                        <div className="mb-3">
                          <h3 className="text-lg font-semibold mb-2">Who we are</h3>
                          <p className="text-gray-600 text-sm">
                            We are a technology pioneer empowering startups, large enterprises, 
                            and Fortune 100 clients worldwide to harness the power of innovation, 
                            build resilience, and become agile in the ever-changing world.
                          </p>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="text-center p-2 bg-white rounded-lg">
                            <div className="text-xl font-bold text-blue-900">400+</div>
                            <div className="text-xs text-gray-600">Uber Minds</div>
                          </div>
                          <div className="text-center p-2 bg-white rounded-lg">
                            <div className="text-xl font-bold text-blue-900">98%</div>
                            <div className="text-xs text-gray-600">Client Return Rate</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-4">
                        <div className="grid grid-cols-1 gap-3">
                          {identityContent.map((item) => (
                            <Link 
                              key={item.title}
                              href={item.href}
                              className="group p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                            >
                              <h3 className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-blue-900">
                                {item.title}
                              </h3>
                              <p className="text-gray-600 text-xs">
                                {item.description}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="col-span-4 bg-gray-50 rounded-lg p-4">
                        {/* Certificates Section */}
                        <div>
                          <div className="grid grid-cols-4 gap-2">
                            <div className="bg-white p-1 rounded-lg h-20 w-20">
                              <Image
                                src="/images/ISO1.svg"
                                alt="ISO Certification 1"
                                width={50}
                                height={50}
                                className="w-full h-auto"
                              />
                            </div>
                            <div className="bg-white p-1 rounded-lg h-20 w-20">
                              <Image
                                src="/images/ISO2.svg"
                                alt="ISO Certification 2"
                                width={50}
                                height={50}
                                className="w-full h-auto"
                              />
                            </div>
                            <div className="bg-white p-1 rounded-lg h-20 w-20">
                              <Image
                                src="/images/ISO3.svg"
                                alt="ISO Certification 3"
                                width={50}
                                height={50}
                                className="w-full h-auto"
                              />
                            </div>
                            <div className="bg-white p-1 rounded-lg h-20 w-20">
                              <Image
                                src="/images/ISO4.svg"
                                alt="ISO Certification 4"
                                width={50}
                                height={50}
                                className="w-full h-auto"
                              />
                            </div>
                            <div className="bg-white p-1 rounded-lg h-20 w-20">
                              <Image
                                src="/images/good-firms.svg"
                                alt="ISO Certification 4"
                                width={50}
                                height={50}
                                className="w-full h-auto"
                              />
                            </div>
                            <div className="bg-white p-1 rounded-lg h-20 w-20">
                              <Image
                                src="/images/clutch.svg"
                                alt="ISO Certification 4"
                                width={50}
                                height={50}
                                className="w-full h-auto"
                              />
                            </div>
                            <div className="bg-white p-1 rounded-lg h-20 w-20">
                              <Image
                                src="/images/forbes.svg"
                                alt="ISO Certification 4"
                                width={50}
                                height={50}
                                className="w-full h-auto"
                              />
                            </div>
                          </div>
                          <div className="mt-3">
                            <div className="grid grid-cols-1 gap-3">
                              <Image
                                src="/images/microSoft1.svg"
                                alt="Microsoft Certification 1"
                                width={250}
                                height={125}
                                style={{ 
                                  minWidth: '350px', 
                                  minHeight: '150px',
                                  objectFit: 'contain'
                                }}
                              />
                              <Image
                                src="/images/microSoft2.svg"
                                alt="Microsoft Certification 2"
                                width={250}
                                height={125}
                                style={{ 
                                  minWidth: '350px', 
                                  minHeight: '150px',
                                  objectFit: 'contain'
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Our Working Ethos Link */}
            <Link
              href="/working-ethos"
              className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Our Working Ethos
            </Link>

            {/* Services/What We Offer Dropdown */}
            <div 
              className="static"
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
            >
              <button className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-2">
                What We Offer
                {showServices ? (
                  <FaChevronUp className="w-3 h-3" />
                ) : (
                  <FaChevronDown className="w-3 h-3" />
                )}
              </button>
              
              {showServices && (
                <div className="absolute left-0 right-0 bg-white shadow-xl" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
                  <div className="max-w-7xl mx-auto px-8 py-12">
                    <div className="grid grid-cols-4 gap-8">
                      {/* Main Services Grid - First 3 Columns */}
                      <div className="col-span-3 grid grid-cols-3 gap-8 bg-white overflow-y-auto rounded-lg p-6" style={{ maxHeight: '70vh' }}>
                        {Object.entries(services).map(([category, items]) => (
                          <div key={category} className="space-y-4">
                            <div className="flex items-center gap-3">
                              {category === 'Advisory' && <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"><span className="text-xl">💡</span></div>}
                              {category === 'Engineering' && <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"><span className="text-xl">⚙️</span></div>}
                              {category === 'Optimization' && <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"><span className="text-xl">📈</span></div>}
                              {category === 'Artificial Intelligence' && <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"><span className="text-xl">🤖</span></div>}
                              {category === 'Business Enablement' && <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"><span className="text-xl">💼</span></div>}
                              {category === 'Engagement Models' && <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"><span className="text-xl">🤝</span></div>}
                              <h3 className="text-lg font-semibold text-gray-900">{category}</h3>
                            </div>
                            <ul className="space-y-3">
                              {items.map((item) => (
                                <li key={item}>
                                  <Link 
                                    href={`/services/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="text-gray-600 hover:text-blue-900 text-sm block transition-colors duration-200"
                                  >
                                    {item}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {/* Solutions and Expertise - Last Column */}
                      <div className="col-span-1 space-y-8 bg-blue-900 rounded-lg p-6 overflow-y-auto" style={{ maxHeight: '70vh' }}>
                        <div>
                          <h3 className="text-lg font-semibold mb-4 text-white">Solutions</h3>
                          <div className="flex flex-wrap gap-2">
                            {solutions.map((solution) => (
                              <Link
                                key={solution}
                                href={`/solutions/${solution.toLowerCase().replace(/\s+/g, '-')}`}
                                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors duration-200"
                              >
                                {solution}
                              </Link>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-4 text-white">Expertise</h3>
                          <div className="flex flex-wrap gap-2">
                            {expertise.map((item) => (
                              <div key={item.name} className="relative inline-flex">
                                <Link
                                  href={`/expertise/${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                                  className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm hover:bg-gray-700 transition-colors duration-200"
                                >
                                  {item.name}
                                </Link>
                                {item.badge && (
                                  <span className={`absolute -top-2 -right-2 px-2 py-0.5 text-[10px] font-bold rounded-full ${
                                    item.badge === 'TRENDING' ? 'bg-orange-500' : 'bg-blue-500'
                                  } text-white`}>
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                          <h3 className="text-lg font-semibold mb-2 text-gray-900">What&apos;s New?</h3>
                          <p className="text-sm text-gray-600 mb-4">Streamlined ABB&apos;s operations with Salesforce and Azure integration.</p>
                          <Link 
                            href="/case-studies/abb"
                            className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center"
                          >
                            Learn More →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link
              href="/contact"
              className="bg-blue-900 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors duration-200"
            >
              Let&apos;s Talk
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-900 focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Mobile Identity Menu */}
            <div className="space-y-4 px-3 py-2">
              <h3 className="text-lg font-semibold">Our Identity</h3>
              <div className="space-y-4 ml-4">
                {identityContent.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="block"
                    onClick={() => setIsOpen(false)}
                  >
                    <h4 className="text-base font-medium text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Working Ethos Link */}
            <Link
              href="/working-ethos"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-900"
              onClick={() => setIsOpen(false)}
            >
              Our Working Ethos
            </Link>

            {/* Mobile Services Menu */}
            <div className="space-y-4 px-3 py-2">
              <h3 className="text-lg font-semibold">Services</h3>
              {Object.entries(services).map(([category, items]) => (
                <div key={category} className="ml-4">
                  <h4 className="text-base font-medium text-gray-900 mb-2">{category}</h4>
                  <ul className="space-y-2 ml-4">
                    {items.map((item) => (
                      <li key={item}>
                        <Link
                          href={`/services/${item.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-gray-600 hover:text-blue-900 block"
                          onClick={() => setIsOpen(false)}
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Solutions</h3>
                <div className="flex flex-wrap gap-2">
                  {solutions.map((solution) => (
                    <Link
                      key={solution}
                      href={`/solutions/${solution.toLowerCase().replace(/\s+/g, '-')}`}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {solution}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {expertise.map((item) => (
                    <div key={item.name} className="relative inline-flex">
                      <Link
                        href={`/expertise/${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm hover:bg-gray-700"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.badge && (
                        <span className={`absolute -top-2 -right-2 px-2 py-0.5 text-[10px] font-bold rounded-full ${
                          item.badge === 'TRENDING' ? 'bg-orange-500' : 'bg-blue-500'
                        } text-white`}>
                          {item.badge}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Link
              href="/contact"
              className="bg-blue-900 text-white block px-3 py-2 rounded-md text-base font-medium text-center hover:bg-blue-800 transition-colors duration-200 mt-4"
              onClick={() => setIsOpen(false)}
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 