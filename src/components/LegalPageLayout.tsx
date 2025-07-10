import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({ title, lastUpdated, children }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-[#d9d9d9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              to="/" 
              className="flex items-center space-x-3 text-gray-600 hover:text-[#5489ae] transition-colors"
            >
              <img 
                src="/New Ceremoney Logo Cover.png" 
                alt="Ceremoney" 
                className="h-8 w-auto"
              />
            </Link>
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-gray-600 hover:text-[#5489ae] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Page Header */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl lg:text-4xl font-bold text-[#000000]">
              {title}
            </h1>
            <p className="text-gray-600">
              Last updated: {lastUpdated}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {children}
          </div>

          {/* Footer Navigation */}
          <div className="pt-8 border-t border-[#d9d9d9]">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <Link 
                to="/" 
                className="flex items-center space-x-2 text-[#5489ae] hover:text-[#8bacbf] transition-colors"
              >
                <Home className="w-4 h-4" />
                <span>Return to Homepage</span>
              </Link>
              <div className="flex space-x-6 text-sm text-gray-500">
                <Link to="/terms" className="hover:text-[#5489ae] transition-colors">Terms</Link>
                <Link to="/privacy" className="hover:text-[#5489ae] transition-colors">Privacy</Link>
                <Link to="/cookies" className="hover:text-[#5489ae] transition-colors">Cookies</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LegalPageLayout;