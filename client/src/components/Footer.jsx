import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#80a573] text-white p-8">
      <div className="max-w-6xl mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Arekta Team. All rights reserved.</p>
        <p className="text-sm">Designed with ❤️ by Arekta Team</p>
      </div>
    </footer>
  );
};

export default Footer;
