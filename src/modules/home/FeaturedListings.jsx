import React from 'react';
import { MapPin, Users, Heart } from 'lucide-react';
import { ImageWithFallback } from '../../components/ImageWithFallback';
import { Badge } from '../../components/Badge';

export function FeaturedListings({ onListingClick }) {
  const listings = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWRyb29tJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzYwMTcwMDEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Spacious 2BHK in Koregaon Park',
      type: 'Room for Rent',
      rent: '₹15,000',
      location: 'Koregaon Park',
      flatmates: '2 Flatmates',
      amenities: ['WiFi', 'Furnished', 'AC'],
      gender: 'Female',
      verified: true,
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1705304368090-933597b11c55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwZnVybmlzaGVkJTIwYmVkcm9vbXxlbnwxfHx8fDE3NjAyNzYyNzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Furnished Room in Kharadi',
      type: 'Flatmate Wanted',
      rent: '₹18,000',
      location: ' Kharadi',
      flatmates: '1 Flatmate',
      amenities: ['WiFi', 'Gym', 'Parking'],
      gender: 'Any',
      verified: true,
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1758523669443-12aab4688ee9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzaGFyZWQlMjBhcGFydG1lbnR8ZW58MXx8fHwxNzYwMjc2MjcxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'PG Accommodation in Hadapsar',
      type: 'Paying Guest',
      rent: '₹12,000',
      location: 'Hadapsar',
      flatmates: '3 Flatmates',
      amenities: ['Meals', 'WiFi', 'Laundry'],
      gender: 'Male',
      verified: true,
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1662454419622-a41092ecd245?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc2MDE5MDA0MHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Cozy Studio in Narhe',
      type: 'Room for Rent',
      rent: '₹20,000',
      location: 'HSR Layout, Narhe',
      flatmates: 'No Flatmates',
      amenities: ['WiFi', 'Furnished', 'Kitchen'],
      gender: 'Any',
      verified: false,
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 md:mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl mb-2 text-[#1E1E1E]">
              Featured <span className="gradient-text">Listings</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Handpicked properties just for you
            </p>
          </div>
          <button
            onClick={onListingClick}
            className="text-[#FF5E62] hover:underline"
          >
            View All →
          </button>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {listings.map((listing) => (
            <div
              key={listing.id}
              onClick={onListingClick}
              className="group bg-white rounded-[20px] md:rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer border border-gray-200 hover:border-[#FF5E62]"
            >
              {/* Image */}
              <div className="relative h-40 md:h-48 overflow-hidden">
                <ImageWithFallback
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {listing.verified && (
                  <div className="absolute top-2 md:top-3 left-2 md:left-3 bg-green-500 text-white text-xs px-2 md:px-3 py-1 rounded-full">
                    ✓ Verified
                  </div>
                )}
                <button className="absolute top-2 md:top-3 right-2 md:right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-[#FF5E62] hover:text-white transition-colors">
                  <Heart className="w-4 h-4" />
                </button>
                <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3">
                  <Badge className="bg-white text-[#1E1E1E] text-xs">
                    {listing.type}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-3 md:p-4">
                <h3 className="text-base md:text-lg mb-2 text-[#1E1E1E] line-clamp-1">
                  {listing.title}
                </h3>

                <div className="gradient-text text-xl md:text-2xl mb-3">
                  {listing.rent}<span className="text-sm">/mo</span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span className="line-clamp-1">{listing.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="w-4 h-4 flex-shrink-0" />
                    <span>{listing.flatmates}</span>
                  </div>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {listing.amenities.map((amenity, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-xs text-gray-700 rounded-full"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-gray-200">
                  <span className="text-xs text-gray-600">
                    Preferred: {listing.gender}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onListingClick?.();
                    }}
                    className="text-[#FF5E62] text-xs md:text-sm hover:underline"
                  >
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
