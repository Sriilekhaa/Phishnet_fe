
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-phishnet-darkpurple py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <p className="text-phishnet-purple font-semibold text-lg mb-2">PhishNet</p>
          <p className="text-gray-400 text-sm mb-6">When in doubt, PhishNet it out</p>
          <p className="text-gray-500 text-xs">Developed at VIT Chennai</p>
          <p className="text-gray-500 text-xs mt-4">© {new Date().getFullYear()} PhishNet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
