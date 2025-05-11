import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, LogIn } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-brand-blue font-bold text-2xl">DubSubAI</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-brand-blue transition-colors">
              Home
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-brand-blue transition-colors">
              Preços
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-brand-blue transition-colors">
              Sobre Nós
            </Link>
            <Link to="/support" className="text-gray-700 hover:text-brand-blue transition-colors">
              Suporte
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link to="/login">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <LogIn size={16} />
                <span>Entrar</span>
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="sm">Criar Conta</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-brand-blue focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-brand-blue transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/pricing"
                className="text-gray-700 hover:text-brand-blue transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Preços
              </Link>
              <Link 
                to="/about"
                className="text-gray-700 hover:text-brand-blue transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Sobre Nós
              </Link>
              <Link 
                to="/support"
                className="text-gray-700 hover:text-brand-blue transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Suporte
              </Link>
              <div className="flex space-x-3 pt-2">
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" size="sm">
                    Entrar
                  </Button>
                </Link>
                <Link to="/signup" onClick={() => setIsOpen(false)}>
                  <Button size="sm">Criar Conta</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
