
import React from 'react';

import {
  Navbar, Header, PaymentPagesCardSection, BusinessBankingSection, FeaturesSection,
  RazorpayXFeaturesSection,JoinUsSection, TestimonialsSection,CTA, Footer
} from './components'





const App = () => {
  return (
    <div className='w-screen h-screen font-mullish overflow-x-hidden '>

      <Navbar />
      <Header />
      <PaymentPagesCardSection />
      <BusinessBankingSection />
      <RazorpayXFeaturesSection />
      <FeaturesSection />
      <JoinUsSection />
      <TestimonialsSection />
      <CTA/>
      <Footer />

 

    </div>
  );
};

export default App;
