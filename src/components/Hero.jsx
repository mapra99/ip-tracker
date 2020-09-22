import React from 'react';

const Hero = ({ children }) => (
  <section className='hero'>
    <h1>IP Address Tracker</h1>
    {children}
  </section>
);

export default Hero;
