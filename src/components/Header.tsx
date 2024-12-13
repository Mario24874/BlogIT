import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import logo from '../assets/Logo_Blog_IT_SF.png';
import { Link } from 'react-router-dom';

const backgrounds = [
  '/images/background1.jpg',
  '/images/background2.jpg',
  '/images/background3.jpg',
  '/images/background4.jpg',
  '/images/background5.jpg'
];

export function Header() {
  const [currentBg, setCurrentBg] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="relative h-[60vh] overflow-hidden">
      {backgrounds.map((bg, index) => (
        <div
          key={bg}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentBg === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      ))}
      
      <div className="relative z-10 container mx-auto px-4">
        <nav className="py-6 flex justify-between items-center">
          <img src={logo} alt="BlogIT Logo" className="h-18 mr-4" />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            <Menu size={24} />
          </button>
          <div className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:block absolute md:relative top-16 md:top-0 left-0 right-0 md:right-auto bg-black/90 md:bg-transparent p-4 md:p-0`}>
            <ul className="flex flex-col md:flex-row gap-6 text-white">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Inicio</Link></li>
              <li><Link to="/articles" className="hover:text-blue-400 transition-colors">Artículos</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">Nosotros</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contacto</Link></li>
            </ul>
          </div>
        </nav>
        
        <div className="text-center mt-20">
          <h2 className="text-white text-5xl font-bold mb-4">Bienvenido a BlogIT</h2>
          <p className="text-gray-200 text-xl">Lo último en tecnología e innovación</p>
        </div>
      </div>
    </header>
  );
}