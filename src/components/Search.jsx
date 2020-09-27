// library dependencies;
import React from 'react';

// assets
import ChevronRightIcon from '../assets/static/icons/ChevronRightIcon';
import LoadingSpinnerIcon from '../assets/static/icons/LoadingSpinnerIcon';
import '../assets/styles/components/Search.scss';

const Search = ({ onSubmit, loading }) => (
  <form className={`cta-search ${loading ? 'loading' : ''}`} onSubmit={onSubmit}>
    <input id='search-term' type='text' placeholder='Search for any IP address or domain' />
    <button disabled={loading} type='submit' htmlFor='search-term'>
      {loading ? <LoadingSpinnerIcon /> : <ChevronRightIcon />}
    </button>
  </form>
);

export default Search;
