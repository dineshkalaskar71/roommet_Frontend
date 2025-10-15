import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-white pt-12 md:pt-16 pb-6 md:pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-8 md:mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 gradient-coral-orange rounded-[12px] flex items-center justify-center">
                <span className="text-white">R</span>
              </div>
              <span className="gradient-text text-xl">Roommet</span>
            </div>
            <p className="text-gray-400 text-sm md:text-base mb-4 md:mb-6">
              India's most trusted platform for finding flatmates and shared accommodations.
              Connect with verified people and discover your perfect living space.
            </p>
            <div className="flex gap-3 md:gap-4">
              {[
                {
                  Icon: Instagram,
                  href: "https://www.instagram.com/roommet_finder?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
                },
                {
                  Icon: Linkedin,
                  href: "https://www.linkedin.com/company/sync-solutions-navale-bridge/",
                },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-[#FF5E62] rounded-full flex items-center justify-center transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}

            </div>
          </div>

          {/* Quick Links */}
          {/* <div>
            <h3 className="text-base md:text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 md:space-y-3">
              {['About Us', 'How It Works', 'Blog', 'Careers', 'Press'].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-sm md:text-base text-gray-400 hover:text-[#FF5E62] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Categories */}
          {/* <div>
            <h3 className="text-base md:text-lg mb-4">Categories</h3>
            <ul className="space-y-2 md:space-y-3">
              {['Rooms for Rent', 'Flatmates Wanted', 'Paying Guest (PG)', 'Full Apartments', 'Hostels'].map((cat, i) => (
                <li key={i}>
                  <a href="#" className="text-sm md:text-base text-gray-400 hover:text-[#FF5E62] transition-colors">
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact */}
          {/* <div>
            <h3 className="text-base md:text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2 md:space-y-3">
              {[
                { icon: Mail, text: 'support@roommet.com' },
                { icon: Phone, text: '+91 1800-123-4567' },
                { icon: MapPin, text: 'Bangalore, Karnataka, India' },
              ].map((contact, i) => (
                <li key={i} className="flex items-start gap-3 text-sm md:text-base text-gray-400">
                  <contact.icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>{contact.text}</span>
                </li>
              ))}
            </ul>
          </div> */}
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs md:text-sm text-center md:text-left">
              © 2025 Roommet. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link, i) => (
                <a key={i} href="#" className="text-gray-400 hover:text-[#FF5E62] text-xs md:text-sm transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
