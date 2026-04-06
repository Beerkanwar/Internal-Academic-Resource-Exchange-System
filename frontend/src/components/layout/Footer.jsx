import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 text-center text-sm border-t-4 border-[#800000]">
      <p>&copy; {new Date().getFullYear()} Dr B R Ambedkar National Institute of Technology Jalandhar.</p>
      <p className="mt-1">Internal Academic Resource & Notes Exchange System.</p>
    </footer>
  );
};

export default Footer;
