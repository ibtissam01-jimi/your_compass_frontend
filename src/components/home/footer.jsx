import React from "react";
import {
  Youtube,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0d3b66] text-white min-h-[500px] flex flex-col">
      <div className="flex-grow">
        <div className="max-w-screen-xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold italic mb-4 border-b-2 border-white inline-block">
              About Your Compass
            </h3>
            <p className="text-sm text-gray-300 mt-4">
              Your Compass is a tourism platform that helps travelers discover Morocco by offering services such as hotel reservations, car rentals, recommended restaurants, and sightseeing tours.
            </p>
            <h4 className="mt-6 mb-2 font-semibold">Contact Our</h4>
            <div className="flex space-x-4 mt-2">
              <a href="#"><Youtube className="w-6 h-6 hover:text-yellow-400" /></a>
              <a href="#"><Instagram className="w-6 h-6 hover:text-yellow-400" /></a>
              <a href="#"><Facebook className="w-6 h-6 hover:text-yellow-400" /></a>
              <a href="#"><Twitter className="w-6 h-6 hover:text-yellow-400" /></a>
            </div>
          </div>

          {/* Tweets */}
          <div>
            <h3 className="text-xl font-semibold italic mb-4 border-b-2 border-white inline-block">
              Latest Tweets
            </h3>
            <div className="text-sm text-gray-300 space-y-4 mt-4">
              <div>
                <p>Fellows and they knew it is</p>
                <a href="http://CourCompass/" className="text-blue-300 hover:underline">http://CourCompass/</a>
                <p className="text-yellow-400 mt-1">6 Days ago</p>
              </div>
              <div>
                <p>Skipper too the millionaire</p>
                <a href="http://CourCompass/" className="text-blue-300 hover:underline">http://CourCompass/</a>
                <p className="text-yellow-400 mt-1">10 Days ago</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold italic mb-4 border-b-2 border-white inline-block">
              Get in Touch
            </h3>
            <div className="text-sm text-gray-300 mt-4 space-y-2">
              <p>(1-8016-7890-1990)</p>
              <p>(1-8413-7890-1990)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-300 border-t border-gray-500 py-4">
        Copyrights © YourCompass 2017. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
