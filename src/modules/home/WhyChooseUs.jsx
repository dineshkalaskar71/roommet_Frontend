import { Shield, Users, Clock, Award, Heart, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '../../components/ImageWithFallback';

export function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: 'Verified Profiles',
      description:
        '100% verified users and properties for your safety and peace of mind',
    },
    {
      icon: Users,
      title: 'Large Community',
      description:
        'Join 2 lakh+ users finding their perfect living situations',
    },
    {
      icon: Clock,
      title: 'Quick & Easy',
      description:
        'Find flatmates in minutes with our smart AI matching algorithm',
    },
    {
      icon: Award,
      title: 'Trusted Platform',
      description:
        "India's most trusted flatmate finder with 50K+ successful matches",
    },
    {
      icon: Heart,
      title: 'Free to Use',
      description:
        'No hidden charges, completely free for both renters and flatmates',
    },
    {
      icon: TrendingUp,
      title: 'Growing Network',
      description:
        'New listings added daily across 30+ cities in India',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left - Image */}
          <div className="relative order-last lg:order-first">
            <div className="relative rounded-2xl md:rounded-[32px] overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1571666522239-9a0e222c5f1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHJvb21tYXRlcyUyMGZyaWVuZHN8ZW58MXx8fHwxNzYwMjc2MjcwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Happy roommates"
                className="w-full h-[300px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

              {/* Stats Overlay */}
              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 md:p-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="gradient-text text-xl md:text-2xl mb-1">
                        98%
                      </div>
                      <p className="text-xs md:text-sm text-gray-600">
                        Success Rate
                      </p>
                    </div>
                    <div className="text-center border-x border-gray-200">
                      <div className="gradient-text text-xl md:text-2xl mb-1">
                        24/7
                      </div>
                      <p className="text-xs md:text-sm text-gray-600">Support</p>
                    </div>
                    <div className="text-center">
                      <div className="gradient-text text-xl md:text-2xl mb-1">
                        4.8★
                      </div>
                      <p className="text-xs md:text-sm text-gray-600">
                        User Rating
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Features */}
          <div>
            <h2 className="text-3xl md:text-4xl mb-4 text-[#1E1E1E]">
              Why Choose <span className="gradient-text">Roommet?</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              We make finding flatmates and rooms simple, safe, and stress-free
            </p>

            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-3 md:gap-4 p-4 md:p-5 bg-gradient-to-br from-gray-50 to-white rounded-xl md:rounded-2xl border border-gray-200 hover:border-[#FF5E62] hover:shadow-lg transition-all"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 gradient-coral-orange rounded-lg md:rounded-xl flex items-center justify-center">
                      <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg mb-1 text-[#1E1E1E]">
                      {feature.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
