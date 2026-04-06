// src/components/Footer.jsx
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900/80 border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400">
            © {currentYear} Snake Block Breaker. All rights reserved.
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-gray-400 hover:text-green-400 transition">
              Privacy
            </Link>
            <Link to="/terms" className="text-sm text-gray-400 hover:text-green-400 transition">
              Terms
            </Link>
            <Link to="/credits" className="text-sm text-gray-400 hover:text-green-400 transition">
              Credits
            </Link>
            <div className="flex items-center text-sm text-gray-500">
              Made with <Heart className="w-3 h-3 mx-1 text-red-500" /> for gamers
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;