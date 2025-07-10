import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/New Ceremoney Logo Cover.png" 
              alt="Ceremoney" 
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-[#5489ae] transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-[#5489ae] transition-colors">How it Works</a>
            <a href="#benefits" className="text-gray-600 hover:text-[#5489ae] transition-colors">Benefits</a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="mailto:info@ceremoney.co.za" 
              className="text-gray-600 hover:text-[#5489ae] transition-colors"
            >
              Contact Us
            </a>
            <a 
              href="https://apps.apple.com/za/app/ceremoney/id1474707578"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5489ae] text-white px-6 py-2 rounded-lg hover:bg-[#8bacbf] transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Download App
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-600 hover:text-[#5489ae] transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-[#5489ae] transition-colors">How it Works</a>
              <a href="#benefits" className="text-gray-600 hover:text-[#5489ae] transition-colors">Benefits</a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
                <a 
                  href="mailto:info@ceremoney.co.za" 
                  className="text-gray-600 hover:text-[#5489ae] transition-colors text-left"
                >
                  Contact Us
                </a>
                <a 
                  href="https://apps.apple.com/za/app/ceremoney/id1474707578"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#5489ae] text-white px-6 py-2 rounded-lg hover:bg-[#8bacbf] transition-all duration-200"
                >
                  Download App
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;