import React from 'react';
import { Heart, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Bihar Delights</h3>
                  <p className="text-sm text-gray-300">Authentic Thekua & More</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Preserving the authentic flavors of Bihar for over 25 years. Our traditional Thekua and sweets 
                bring families together, keeping the sacred traditions of Chhath Puja alive.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-700 hover:bg-orange-600 p-2 rounded-lg transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-700 hover:bg-orange-600 p-2 rounded-lg transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-700 hover:bg-orange-600 p-2 rounded-lg transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-300 hover:text-orange-400 transition-colors">Home</a></li>
                <li><a href="#products" className="text-gray-300 hover:text-orange-400 transition-colors">Products</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-orange-400 transition-colors">About Us</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-orange-400 transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Bulk Orders</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Gift Packs</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 text-orange-400 mt-1" />
                  <p className="text-gray-300 text-sm">
                    Gandhi Maidan, Patna<br />
                    Bihar 800001, India
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-orange-400" />
                  <p className="text-gray-300 text-sm">+91 98765 43210</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-orange-400" />
                  <p className="text-gray-300 text-sm">info@bihardelights.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Bihar Delights. All rights reserved. Made with ❤️ for all Biharis.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Shipping Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;