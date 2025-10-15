import React from 'react';
import { Home, Users, Building, Key } from 'lucide-react';

export function CategorySection({ onCategoryClick }) {
  const categories = [
    {
      icon: Home,
      title: 'Rooms for Rent',
      description: 'Find affordable rooms in shared apartments',
      count: '15K+ listings',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Users,
      title: 'Flatmates Wanted',
      description: 'Connect with verified flatmates',
      count: '12K+ listings',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Building,
      title: 'Paying Guest (PG)',
      description: 'Budget-friendly PG accommodations',
      count: '8K+ listings',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Key,
      title: 'Full Apartment',
      description: 'Rent entire apartments for sharing',
      count: '5K+ listings',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl mb-3 md:mb-4 text-[#1E1E1E]">
            What Are You <span className="gradient-text">Looking For?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Choose from our wide range of accommodation options
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                onClick={onCategoryClick}
                className="group bg-white border-2 border-gray-200 rounded-[20px] md:rounded-[24px] p-5 md:p-6 hover:border-[#FF5E62] hover:shadow-xl transition-all cursor-pointer"
              >
                <div
                  className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${category.color} rounded-[14px] md:rounded-[16px] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="text-lg md:text-xl mb-2 text-[#1E1E1E]">{category.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700">
                  {category.count}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
