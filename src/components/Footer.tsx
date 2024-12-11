import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitch, FaDiscord, FaYoutube } from 'react-icons/fa';
import { SiThreads } from 'react-icons/si';
import { RiTwitterXFill } from 'react-icons/ri'; 
import LogoMarioMoreno from '../assets/Logo_Mario_Moreno-SF.png'; 

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-wrap justify-center space-x-4 mb-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          <Link to="/articles" className="hover:text-gray-300">Articles</Link>
          <Link to="/write-with-us" className="hover:text-gray-300">Write with us</Link>
          <Link to="/subscription" className="hover:text-gray-300">Subscribe</Link> 
        </div>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaFacebook className="w-6 h-6" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaInstagram className="w-6 h-6" />
          </a>
          <a href="https://threads.net" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <SiThreads className="w-6 h-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <RiTwitterXFill className="w-6 h-6" /> 
          </a>
          <a href="https://twitch.tv" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaTwitch className="w-6 h-6" />
          </a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaDiscord className="w-6 h-6" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaYoutube className="w-6 h-6" />
          </a>
        </div>
        <p>&copy; 2024 BlogIT. All rights reserved.</p>
        <div className="mt-4 flex justify-center items-center">
          <p className="mr-2">Developed by</p>
          <a href="https://portfoliomariomoreno.netlify.app" target="_blank" rel="noopener noreferrer">
            <img src={LogoMarioMoreno} alt="Mario Moreno" className="w-12 h-12" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;