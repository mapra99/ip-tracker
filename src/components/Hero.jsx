// library dependencies
import React from 'react';

// assets
import '../assets/styles/components/Hero.scss';

const Hero = ({ children }) => (
  <section className='hero'>
    <div className='heading'>
      <h1>IP Address Tracker</h1>
    </div>
    {children}
  </section>
);

export default Hero;
