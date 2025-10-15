import React, { useState } from 'react';
import { Search, Menu, User, Heart, Bell, Plus, X } from 'lucide-react';
import { Button } from '../../components/Button'; // keep this if you use shadcn/ui; else replace with <button>

export default function Header({ onLoginClick, onPostAdClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-[#FF5E62] to-[#FF9966] text-white py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <p>Find Your Perfect Flatmate & Room in India</p>
            <div className="flex items-center gap-4">
              {/* <button className="hover:underline">Help</button>
              <button className="hover:underline">Download App</button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 gradient-coral-orange rounded-[12px] flex items-center justify-center shadow-md">
              <span className="text-white text-xl font-semibold">R</span>
            </div>
            <span className="gradient-text text-xl md:text-2xl font-semibold">Roommet</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {/* <a href="#" className="nav-link">Find Rooms</a>
            <a href="#" className="nav-link">Find Flatmates</a>
            <a href="#" className="nav-link">Cities</a> */}
            {/* <a href="#how-it-works" className="nav-link">How It Works</a> */}
            {/* <a href="#" className="nav-link">Blog</a> */}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* <button className="hidden md:flex items-center gap-2 text-gray-600 hover:text-[#FF5E62] transition-colors">
              <Heart className="w-5 h-5" />
              <span className="text-sm hidden lg:inline">Saved</span>
            </button>

            <button className="hidden md:flex items-center gap-2 text-gray-600 hover:text-[#FF5E62] transition-colors">
              <Bell className="w-5 h-5" />
            </button> */}

            {/* <Button
              onClick={onPostAdClick}
              className="gradient-coral-orange text-white border-0 rounded-[20px] h-10 px-4 md:px-6 hover:opacity-90 text-sm md:text-base"
            >
              <Plus className="w-4 h-4 mr-1 md:mr-2" />
              <span className="hidden sm:inline">Post Ad</span>
              <span className="sm:hidden">Post</span>
            </Button>

            <Button
              onClick={onLoginClick}
              variant="outline"
              className="rounded-[20px] h-10 px-4 md:px-6 border-2 border-gray-200 hover:border-[#FF5E62] text-sm md:text-base"
            >
              <User className="w-4 h-4 mr-1 md:mr-2" />
              Login
            </Button> */}

           
            <button
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-200 mt-2 pt-4">
            <nav className="flex flex-col gap-4">
              <a href="#" className="nav-link">Find Rooms</a>
              <a href="#" className="nav-link">Find Flatmates</a>
              <a href="#" className="nav-link">Cities</a>
              <a href="#how-it-works" className="nav-link">How It Works</a>
              <a href="#" className="nav-link">Blog</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
