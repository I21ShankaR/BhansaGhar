import React from 'react';
import { Heart, Star, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Heart, label: 'Happy Customers', value: '10,000+' },
    { icon: Star, label: 'Products Sold', value: '50,000+' },
    { icon: Users, label: 'Years of Tradition', value: '25+' },
    { icon: Award, label: 'Quality Awards', value: '15+' }
  ];

  return (
    <section id="about" className="py-16 px-4 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Heart className="h-4 w-4 mr-2" />
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Celebrating
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                  Chhath Puja Traditions
                </span>
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  For over 25 years, Bihar Delights has been preserving the authentic flavors of Bihar, 
                  especially the sacred tradition of Chhath Puja. Our signature Thekua is crafted using 
                  time-honored recipes passed down through generations.
                </p>
                <p>
                  <strong>Chhath Puja</strong> is not just a festival - it's a celebration of gratitude 
                  to Surya Dev and Chhathi Maiya. Our Thekua, made with pure ghee, wheat flour, and jaggery, 
                  serves as the perfect offering for this sacred occasion, connecting Biharis worldwide 
                  to their roots.
                </p>
                <p>
                  Every product we create carries the essence of Bihar's rich culinary heritage, 
                  bringing families together and keeping traditions alive, one bite at a time.
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Heart className="h-5 w-5 text-orange-600" />
                </div>
                <span className="text-sm font-medium">Made with Love</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-red-100 p-2 rounded-lg">
                  <Star className="h-5 w-5 text-red-600" />
                </div>
                <span className="text-sm font-medium">Premium Ingredients</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-yellow-100 p-2 rounded-lg">
                  <Users className="h-5 w-5 text-yellow-600" />
                </div>
                <span className="text-sm font-medium">Family Recipes</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Award className="h-5 w-5 text-green-600" />
                </div>
                <span className="text-sm font-medium">Quality Assured</span>
              </div>
            </div>
          </div>

          {/* Image and Stats */}
          <div className="space-y-8">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Traditional Bihar cuisine"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chhath Puja Significance */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              The Significance of Chhath Puja
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding the sacred festival that brings all Biharis together
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌅</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Worship of Sun God</h4>
              <p className="text-gray-600 text-sm">
                Chhath Puja is dedicated to worshipping Surya Dev and thanking him for sustaining life on Earth.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-400 to-red-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🙏</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Prayers for Family</h4>
              <p className="text-gray-600 text-sm">
                Devotees pray for the well-being, prosperity, and happiness of their families.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-red-400 to-orange-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🍃</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Environmental Harmony</h4>
              <p className="text-gray-600 text-sm">
                The festival promotes environmental consciousness and respect for natural resources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;