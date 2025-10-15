import React from 'react';
import { Search, MapPin } from 'lucide-react';
import { Button } from '../../components/Button';
import { Input } from '../../components/input';
import { ImageWithFallback } from '../../components/ImageWithFallback';

export default function HeroSection({ onSearchClick }) {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white py-12 md:py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 gradient-coral-orange rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 gradient-coral-orange rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 text-[#1E1E1E] leading-tight font-semibold">
              Find Your Perfect
              <span className="gradient-text"> Flatmate </span>
              & Room
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
              Connect with verified flatmates and discover comfortable rooms across India's top cities
            </p>

            {/* Search Bar */}
            {/* <div className="bg-white rounded-[20px] md:rounded-[24px] shadow-xl p-4 md:p-6 mb-6 md:mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 min-w-0">
                  <label className="block text-sm text-gray-600 mb-2">Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      placeholder="Enter city, locality..."
                      className="h-12 pl-10 border-2 border-gray-200 rounded-[16px] focus:border-[#FF5E62]"
                    />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <label className="block text-sm text-gray-600 mb-2">Looking For</label>
                  <select className="w-full h-12 px-4 border-2 border-gray-200 rounded-[16px] bg-white focus:border-[#FF5E62] focus:outline-none">
                    <option>Rooms/Flatmates</option>
                    <option>Rooms for Rent</option>
                    <option>Flatmates Wanted</option>
                    <option>Paying Guest (PG)</option>
                  </select>
                </div>

                <Button
                  onClick={onSearchClick}
                  className="gradient-coral-orange text-white border-0 rounded-[16px] h-12 px-8 md:self-end hover:opacity-90 flex items-center justify-center"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Search
                </Button>
              </div>
            </div> */}

            {/* Quick Stats */}
            {/* <div className="grid grid-cols-3 gap-4 md:gap-8">
              <div>
                <div className="gradient-text text-2xl md:text-3xl mb-1 font-semibold">50K+</div>
                <p className="text-gray-600 text-xs md:text-sm">Active Listings</p>
              </div>
              <div>
                <div className="gradient-text text-2xl md:text-3xl mb-1 font-semibold">2L+</div>
                <p className="text-gray-600 text-xs md:text-sm">Happy Users</p>
              </div>
              <div>
                <div className="gradient-text text-2xl md:text-3xl mb-1 font-semibold">30+</div>
                <p className="text-gray-600 text-xs md:text-sm">Cities Covered</p>
              </div>
            </div> */}
          </div>

          {/* Right Image */}
          <div className="relative order-first lg:order-last">
            <div className="relative rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1662454419622-a41092ecd245?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc2MDE5MDA0MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern apartment living"
                className="w-full h-[300px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white rounded-[16px] md:rounded-[20px] shadow-xl p-3 md:p-4 max-w-[160px] md:max-w-[200px]">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 gradient-coral-orange rounded-full flex items-center justify-center text-white text-lg md:text-xl">
                  ✓
                </div>
                <div>
                  <p className="text-xs text-gray-600">Verified</p>
                  <p className="text-sm text-[#1E1E1E] font-medium">Properties</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
