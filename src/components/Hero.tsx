import React from 'react';
import { Star, Heart, Gift } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 py-16 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-orange-400 rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-red-400 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-yellow-400 rounded-full"></div>
        <div className="absolute bottom-32 right-10 w-12 h-12 bg-orange-400 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Heart className="h-4 w-4 mr-2" />
                Made with Love & Tradition
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Authentic
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                  Bihar Delights
                </span>
              </h1>
              <p className="text-xl text-gray-700 mt-6 leading-relaxed">
                Experience the true taste of Bihar with our traditional Thekua and authentic sweets, 
                specially crafted for Chhath Puja and everyday celebrations.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Star className="h-5 w-5 text-orange-600" />
                </div>
                <span className="text-sm font-medium">Premium Quality</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <div className="bg-red-100 p-2 rounded-lg">
                  <Heart className="h-5 w-5 text-red-600" />
                </div>
                <span className="text-sm font-medium">Made Fresh Daily</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <div className="bg-yellow-100 p-2 rounded-lg">
                  <Gift className="h-5 w-5 text-yellow-600" />
                </div>
                <span className="text-sm font-medium">Perfect for Gifting</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Shop Now
              </button>
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg border-2 border-gray-200"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.pexels.com/photos/7525161/pexels-photo-7525161.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Traditional Thekua"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-6 py-3 rounded-full font-bold text-lg shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
              Special for Chhath!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;