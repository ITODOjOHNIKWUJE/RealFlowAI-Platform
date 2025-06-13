import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="text-xl font-bold">RealFlow AI</span>
            </div>
            <p className="text-gray-400 mb-6">
              Powerful, practical AI automation systems for real estate and service-based businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white transition">Services</a></li>
              <li><a href="/pricing" className="text-gray-400 hover:text-white transition">Pricing</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
              <li><a href="/portal" className="text-gray-400 hover:text-white transition">Client Portal</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">AI Chatbots</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Booking Automation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Email & SMS Automation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Document Automation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">CRM Integration</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="text-gray-400">123 Innovation Drive</p>
              <p className="text-gray-400">Tech Hub, Suite 456</p>
              <p className="text-gray-400">Lagos, Nigeria</p>
              <p className="text-gray-400 mt-4">
                <a href="mailto:hello@realflowai.com" className="hover:text-white transition">
                  hello@realflowai.com
                </a>
              </p>
              <p className="text-gray-400">
                <a href="tel:+1234567890" className="hover:text-white transition">
                  +1 (234) 567-890
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 RealFlow AI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

