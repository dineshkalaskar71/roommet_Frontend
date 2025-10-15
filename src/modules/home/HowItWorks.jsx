import React from 'react';
import { Search, UserPlus, MessageCircle, CheckCircle } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: 'Search & Filter',
      description: 'Browse thousands of verified listings based on your preferences, location, and budget',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: UserPlus,
      title: 'Create Profile',
      description: 'Set up your profile with details about yourself to connect with compatible flatmates',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: MessageCircle,
      title: 'Connect & Chat',
      description: 'Message potential flatmates directly and schedule property visits at your convenience',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: CheckCircle,
      title: 'Move In',
      description: 'Finalize the deal, sign the agreement, and move into your new home with confidence',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section id="how-it-works" className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl mb-3 md:mb-4 text-[#1E1E1E]">
            How <span className="gradient-text">Roommet Works</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Finding your perfect flatmate is just 4 steps away
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector Line - Desktop only */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 z-0" />
                )}

                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <div
                    className={`w-24 h-24 md:w-32 md:h-32 mx-auto bg-gradient-to-br ${step.color} rounded-[20px] md:rounded-[24px] flex items-center justify-center mb-4 md:mb-6 shadow-lg hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-12 h-12 md:w-16 md:h-16 text-white" />
                  </div>

                  {/* Step Number */}
                  <div className="inline-block px-3 md:px-4 py-1 gradient-coral-orange text-white rounded-full text-xs md:text-sm mb-3 md:mb-4">
                    Step {index + 1}
                  </div>

                  <h3 className="text-lg md:text-xl mb-2 md:mb-3 text-[#1E1E1E]">{step.title}</h3>
                  <p className="text-sm md:text-base text-gray-600">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
