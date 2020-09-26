// library dependencies;
import React from 'react';

// assets
import ChevronRightIcon from '../assets/static/icons/ChevronRightIcon';
import '../assets/styles/components/Search.scss';

const Search = ({onClick}) => (
  <div className='cta-search'>
    <input id='ip' type='text' placeholder='Search for any IP address or domain' />
    <button type='submit' htmlFor='ip' onClick={onClick}>
      <ChevronRightIcon />
    </button>
  </div>
);

export default Search;
