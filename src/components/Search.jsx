// library dependencies;
import React from 'react';

// assets
import ChevronRightIcon from '../assets/static/icons/ChevronRightIcon';
import '../assets/styles/components/Search.scss';

const Search = () => (
  <div className='cta-search'>
    <input type='text' placeholder='Search for any IP address or domain' />
    <button type='button'>
      <ChevronRightIcon />
    </button>
  </div>
);

export default Search;
