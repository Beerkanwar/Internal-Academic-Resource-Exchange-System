import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-[#800000] text-white">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex flex-col">
            <span className="text-xl font-bold uppercase tracking-wider">Dr B R Ambedkar Nat. Inst. of Tech.</span>
            <span className="text-sm font-medium opacity-90">Academic Resource Exchange</span>
          </Link>
        </div>
        <nav className="mt-4 md:mt-0">
          <ul className="flex space-x-6 text-sm font-medium">
            <li><Link to="/" className="hover:text-yellow-400 transition-colors">Home</Link></li>
            <li><Link to="/resources" className="hover:text-yellow-400 transition-colors">Resources</Link></li>
            <li><Link to="/verification" className="hover:text-yellow-400 transition-colors">Admin Verification</Link></li>
            <li><Link to="/login" className="hover:text-yellow-400 transition-colors border border-white/30 px-3 py-1 rounded">Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
