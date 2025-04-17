'use client';

import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-blue-900 py-12 border-t border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-blue-600">About</Link></li>
              <li><Link href="/life" className="hover:text-blue-600">Life at Confiz</Link></li>
              <li><Link href="/careers" className="hover:text-blue-600">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
              <li><Link href="/sitemap" className="hover:text-blue-600">Sitemap</Link></li>
              <li><Link href="/privacy" className="hover:text-blue-600">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/cloud" className="hover:text-blue-600">Cloud</Link></li>
              <li><Link href="/data-ai" className="hover:text-blue-600">Data & AI</Link></li>
              <li><Link href="/software" className="hover:text-blue-600">Software Development</Link></li>
              <li><Link href="/mobile" className="hover:text-blue-600">Mobile Application</Link></li>
              <li><Link href="/qa" className="hover:text-blue-600">Quality Assurance</Link></li>
              <li><Link href="/devops" className="hover:text-blue-600">DevOps</Link></li>
            </ul>
          </div>

          {/* Solutions Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><Link href="/shopper-value" className="hover:text-blue-600">Shopper Value</Link></li>
              <li><Link href="/c-analytics" className="hover:text-blue-600">C-Analytics</Link></li>
              <li><Link href="/marketing" className="hover:text-blue-600">Customer-Driven Marketing Solution</Link></li>
              <li><Link href="/dynamics" className="hover:text-blue-600">Dynamics 365 Super & Hypermarkets Solution</Link></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
              <li><Link href="/case-studies" className="hover:text-blue-600">Case Studies</Link></li>
              <li><Link href="/news" className="hover:text-blue-600">News</Link></li>
              <li><Link href="/conferences" className="hover:text-blue-600">Conferences</Link></li>
            </ul>
          </div>

          {/* Mailing List Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Join our Mailing List</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border border-blue-200 rounded focus:outline-none focus:border-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-blue-200 rounded focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300"
              >
                Join
              </button>
            </form>

            {/* Social Media Links */}
            <div className="mt-6 flex space-x-4">
              <Link href="#" className="text-blue-600 hover:text-blue-800">
                <FaFacebookF size={20} />
              </Link>
              <Link href="#" className="text-blue-600 hover:text-blue-800">
                <FaLinkedinIn size={20} />
              </Link>
              <Link href="#" className="text-blue-600 hover:text-blue-800">
                <FaTwitter size={20} />
              </Link>
              <Link href="#" className="text-blue-600 hover:text-blue-800">
                <FaInstagram size={20} />
              </Link>
              <Link href="#" className="text-blue-600 hover:text-blue-800">
                <FaYoutube size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-12 text-center text-blue-800">
          <p>We nurture ecosystems of success by harnessing intelligent technologies and capitalizing on human ingenuity.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 