import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import UserBenefits from '../components/UserBenefits';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <UserBenefits />
      <FAQ />
      <Footer />
    </>
  );
};

export default HomePage;