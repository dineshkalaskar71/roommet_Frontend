import React from 'react';
import Header from '../home/Header';
import HeroSection from '../home/HeroSection';
import { CategorySection } from '../home/CategorySection';
import { FeaturedListings } from '../home/FeaturedListings';
import { HowItWorks } from '../home/HowItWorks';
import { WhyChooseUs } from '../home/WhyChooseUs';
import { Testimonials } from '../home/Testimonials';
import { CTASection } from '../home/CTASection';
import { Footer } from '../home/Footer';
import NotifyForm from '../NotifyForm/NotifyForm';

export default function WebsiteLanding({
  onLoginClick,
  onPostAdClick,
  onGetStartedClick,
  onListingClick,
}) {
  return (
    <div className="min-h-screen bg-white">
      <Header onLoginClick={onLoginClick} onPostAdClick={onPostAdClick} />
      <HeroSection onSearchClick={onGetStartedClick} />
      <CategorySection onCategoryClick={onGetStartedClick} />
      <FeaturedListings onListingClick={onListingClick} />
      <HowItWorks />
      <WhyChooseUs />
      {/* <Testimonials /> */}
      <CTASection onGetStartedClick={onGetStartedClick} />
      <NotifyForm/>
      <Footer />
    </div>
  );
}
