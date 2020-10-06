// library dependencies
import React, { useRef } from 'react';
// assets
import '../assets/styles/components/Results.scss';
import ChevronRightIcon from '../assets/static/icons/ChevronRightIcon';

const Results = ({ children, visible }) => {
  const wrapRef = useRef(null);

  const handleFooterClick = () => wrapRef.current?.classList.toggle('hidden');

  if (!visible) return null;

  return (
    <div ref={wrapRef} className='results-wrap'>
      <div className='results-container'>
        <div className='results-content'>
          {children}
        </div>
        <div onClick={handleFooterClick} className='results-footer' role='button' tabIndex={0}>
          <ChevronRightIcon />
        </div>
      </div>
    </div>
  );
};

export default Results;
