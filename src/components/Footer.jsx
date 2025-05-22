import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
         <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p>Email: support@roommatefinder.com</p>
          <p>Phone: +880 1234 567890</p>
          <p>Location: Dhaka, Bangladesh</p>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Useful Links</h2>
          <ul className="space-y-2">
            <li><a href="/terms" className="hover:text-blue-500">Terms & Conditions</a></li>
            <li><a href="/privacy" className="hover:text-blue-500">Privacy Policy</a></li>
            <li><a href="/faq" className="hover:text-blue-500">FAQ</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="" className="hover:text-blue-600">
              <FaFacebookF size={20} />
            </a>
            <a href="" className="hover:text-blue-400">
              <FaTwitter size={20} />
            </a>
            <a href="" className="hover:text-pink-500">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Roommate Finder. All rights reserved.
      </div>
    </footer>
    );
};

export default Footer;