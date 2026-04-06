import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-[#800000] text-white">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex flex-col">
            <span className="text-xl font-bold uppercase tracking-wider">Dr B R Ambedkar National Institute of Technology Jalandhar</span>
            <span className="text-sm font-medium opacity-90">Academic Resource Exchange</span>
          </Link>
        </div>
        <nav className="mt-4 md:mt-0">
          <ul className="flex space-x-6 text-sm font-medium items-center">
            <li><Link to="/" className="hover:text-yellow-400 transition-colors">Home</Link></li>
            <li><Link to="/search" className="hover:text-yellow-400 transition-colors">Search</Link></li>
            <li><Link to="/resources" className="hover:text-yellow-400 transition-colors">Resources</Link></li>

            {user && (user.role === 'admin' || user.role === 'teacher') && (
              <li><Link to="/verification" className="hover:text-yellow-400 transition-colors">Approve</Link></li>
            )}

            {user && user.role === 'admin' && (
              <li><Link to="/admin" className="hover:text-yellow-400 transition-colors border border-red-400 text-red-100 px-2 py-1 rounded">Admin</Link></li>
            )}

            {user ? (
              <li className="flex items-center gap-4 ml-4 pl-4 border-l border-white/30">
                <span className="opacity-80">Hello, {user.email.split('@')[0]}</span>
                <button onClick={handleLogout} className="hover:text-yellow-400 transition-colors border border-white/30 px-3 py-1 rounded">Logout</button>
              </li>
            ) : (
              <li className="ml-2"><Link to="/login" className="hover:text-yellow-400 transition-colors border border-white/30 px-3 py-1 rounded">Login</Link></li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
