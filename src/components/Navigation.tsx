import { Link, useLocation } from "react-router-dom";
import { Coffee, Phone, UtensilsCrossed, Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <nav className="bg-card shadow-soft border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 relative">
          {/* Logo - Always on the left */}
          <Link to="/" className="flex items-center space-x-2 md:space-x-2">
            <img src="/Logo.png" alt="TasteBU Logo" className="h-[65px] w-30 sm:h-15 sm:w-30" />
            <span className="hidden md:inline text-lg sm:text-xl font-bold text-foreground mt-2">TasteBU</span>
          </Link>
          
          {/* TasteBU text - Centered on mobile, hidden on desktop */}
          <div className="absolute left-1/2 transform -translate-x-1/2 md:hidden">
            <span className="text-lg font-bold text-foreground">TasteBU</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 lg:space-x-8 ml-auto">
            <Link
              to="/"
              className={`px-3 py-2 rounded-lg transition-colors duration-200 text-sm lg:text-base ${
                isActive("/")
                  ? "bg-coffee text-primary-foreground font-medium"
                  : "text-foreground hover:text-coffee hover:bg-cream"
              }`}
            >
              หน้าแรก
            </Link>
            <Link
              to="/restaurants"
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors duration-200 text-sm lg:text-base ${
                isActive("/restaurants")
                  ? "bg-coffee text-primary-foreground font-medium"
                  : "text-foreground hover:text-coffee hover:bg-cream"
              }`}
            >
              <UtensilsCrossed className="h-4 w-4" />
              <span>ร้านอาหาร</span>
            </Link>
            <Link
              to="/cafes"
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors duration-200 text-sm lg:text-base ${
                isActive("/cafes")
                  ? "bg-coffee text-primary-foreground font-medium"
                  : "text-foreground hover:text-coffee hover:bg-cream"
              }`}
            >
              <Coffee className="h-4 w-4" />
              <span>คาเฟ่</span>
            </Link>
            <Link
              to="/contacts"
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors duration-200 text-sm lg:text-base ${
                isActive("/contacts")
                  ? "bg-coffee text-primary-foreground font-medium"
                  : "text-foreground hover:text-coffee hover:bg-cream"
              }`}
            >
              <Phone className="h-4 w-4" />
              <span>ติดต่อ</span>
            </Link>
          </div>

          {/* Mobile menu button - Always on the right */}
          <button
            onClick={toggleMenu}
            className="md:hidden ml-auto p-2 rounded-lg text-foreground hover:text-coffee hover:bg-cream transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="py-4 space-y-2">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-lg transition-colors duration-200 ${
                isActive("/")
                  ? "bg-coffee text-primary-foreground font-medium"
                  : "text-foreground hover:text-coffee hover:bg-cream"
              }`}
            >
              หน้าแรก
            </Link>
            <Link
              to="/restaurants"
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-200 ${
                isActive("/restaurants")
                  ? "bg-coffee text-primary-foreground font-medium"
                  : "text-foreground hover:text-coffee hover:bg-cream"
              }`}
            >
              <UtensilsCrossed className="h-4 w-4" />
              <span>ร้านอาหาร</span>
            </Link>
            <Link
              to="/cafes"
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-200 ${
                isActive("/cafes")
                  ? "bg-coffee text-primary-foreground font-medium"
                  : "text-foreground hover:text-coffee hover:bg-cream"
              }`}
            >
              <Coffee className="h-4 w-4" />
              <span>คาเฟ่</span>
            </Link>
            <Link
              to="/contacts"
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-200 ${
                isActive("/contacts")
                  ? "bg-coffee text-primary-foreground font-medium"
                  : "text-foreground hover:text-coffee hover:bg-cream"
              }`}
            >
              <Phone className="h-4 w-4" />
              <span>ติดต่อ</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;