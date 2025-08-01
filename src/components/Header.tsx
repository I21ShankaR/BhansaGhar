import React, { useState } from 'react';
import { ShoppingCart, User, Search, Menu, X, Heart } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import AuthModal from './AuthModal';
import Cart from './Cart';

interface HeaderProps {
  onSearch: (query: string) => void;
  searchQuery: string;
}

const Header: React.FC<HeaderProps> = ({ onSearch, searchQuery }) => {
  const { user, logout } = useAuth();
  const { totalItems } = useCart();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 text-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <Heart className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Bihar Delights</h1>
                <p className="text-xs text-orange-200">Authentic Thekua & More</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-yellow-300 transition-colors">Home</a>
              <a href="#products" className="hover:text-yellow-300 transition-colors">Products</a>
              <a href="#about" className="hover:text-yellow-300 transition-colors">About</a>
              <a href="#contact" className="hover:text-yellow-300 transition-colors">Contact</a>
            </nav>

            {/* Search Bar */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for sweets, thekua..."
                  value={searchQuery}
                  onChange={(e) => onSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowCart(true)}
                className="relative p-2 hover:bg-orange-500 rounded-lg transition-colors"
              >
                <ShoppingCart className="h-6 w-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-yellow-400 text-red-600 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              {user ? (
                <div className="hidden md:flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span className="text-sm">Hi, {user.name}</span>
                  <button
                    onClick={handleLogout}
                    className="text-sm bg-red-500 hover:bg-red-600 px-3 py-1 rounded-lg transition-colors"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="hidden md:flex items-center space-x-1 bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  <User className="h-4 w-4" />
                  <span>Sign In</span>
                </button>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 hover:bg-orange-500 rounded-lg transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-orange-500">
              <div className="flex flex-col space-y-4">
                {/* Mobile Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for sweets, thekua..."
                    value={searchQuery}
                    onChange={(e) => onSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>

                {/* Mobile Navigation */}
                <nav className="flex flex-col space-y-2">
                  <a href="#home" className="py-2 hover:text-yellow-300 transition-colors">Home</a>
                  <a href="#products" className="py-2 hover:text-yellow-300 transition-colors">Products</a>
                  <a href="#about" className="py-2 hover:text-yellow-300 transition-colors">About</a>
                  <a href="#contact" className="py-2 hover:text-yellow-300 transition-colors">Contact</a>
                </nav>

                {/* Mobile User Actions */}
                {user ? (
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center space-x-2">
                      <User className="h-5 w-5" />
                      <span className="text-sm">Hi, {user.name}</span>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="text-sm bg-red-500 hover:bg-red-600 px-3 py-1 rounded-lg transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setShowAuthModal(true);
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center justify-center space-x-1 bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    <User className="h-4 w-4" />
                    <span>Sign In</span>
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Modals */}
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
      <Cart isOpen={showCart} onClose={() => setShowCart(false)} />
    </>
  );
};

export default Header;