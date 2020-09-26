// library dependencies
import React from 'react';

// assets
import '../assets/styles/components/Results.scss';

const Results = ({ children, visible }) => visible && (
  <div className='results-wrap'>
    {children}
  </div>
);

export default Results;
