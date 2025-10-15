import React from 'react';
import { ArrowRight, Smartphone } from 'lucide-react';
import { Button } from '../../components/Button';
// import { Button } from '../ui/button';

export function CTASection({ onGetStartedClick }) {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-[#FF5E62] to-[#FF9966] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="text-white text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 leading-tight">
              Ready to Find Your
              <br />
              Perfect Flatmate?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8">
              Join thousands of happy users who found their ideal living situation through Roommet
            </p>

            {/* <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start mb-6 md:mb-8">
              <Button
                onClick={onGetStartedClick}
                size="lg"
                className="bg-white text-[#FF5E62] hover:bg-gray-100 border-0 rounded-[20px] h-12 md:h-14 px-6 md:px-8 text-base md:text-lg"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#FF5E62] rounded-[20px] h-12 md:h-14 px-6 md:px-8 text-base md:text-lg"
              >
                <Smartphone className="w-5 h-5 mr-2" />
                Download App
              </Button>
            </div> */}

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-md mx-auto md:mx-0">
              {[
                { title: '100% Free', subtitle: 'No Hidden Charges' },
                { title: '100% Secure', subtitle: 'Verified Profiles' },
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl md:text-2xl">✓</span>
                  </div>
                  <div className="text-left">
                    <p className="text-xs md:text-sm text-white/80">{feature.title}</p>
                    <p className="text-base md:text-lg">{feature.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image/Stats */}
          <div className="relative hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-[32px] blur-2xl" />
              <div className="relative bg-white/10 backdrop-blur-sm rounded-[32px] p-6 md:p-8 border border-white/30">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: '🏠', text: 'Rooms' },
                    { icon: '👥', text: 'Users' },
                    { icon: '💬', text: 'Live Chat' },
                    { icon: '✓', text: 'Verified' },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-[20px] p-4 md:p-6 text-center hover:scale-105 transition-transform"
                    >
                      <div className="text-3xl md:text-4xl mb-2 md:mb-3">{item.icon}</div>
                      <p className="text-sm md:text-base text-gray-600">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
