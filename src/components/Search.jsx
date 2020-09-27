// library dependencies;
import React from 'react';

// assets
import ChevronRightIcon from '../assets/static/icons/ChevronRightIcon';
import LoadingSpinnerIcon from '../assets/static/icons/LoadingSpinnerIcon';
import '../assets/styles/components/Search.scss';

const Search = ({ onSubmit, loading, errorVisible }) => {
  const renderErrors = () => (
    <div className='error-messages'>
      <p>We couldn`t process your search</p>
      <div className='error-message ip'>
        <p>
          Please type a valid IPv4 address
          <br />
          Ex: 192.212.174.101
        </p>
      </div>
      <div className='error-message domain'>
        <p>
          Or a valid domain name
          <br />
          Ex: facebook.com
        </p>
      </div>
    </div>
  );

  return (
    <div className='cta-wrap'>
      <form className={`cta-search ${loading ? 'loading' : ''}`} onSubmit={onSubmit}>
        <input id='search-term' type='text' placeholder='Search for any IP address or domain' />
        <button disabled={loading} type='submit' htmlFor='search-term'>
          {loading ? <LoadingSpinnerIcon /> : <ChevronRightIcon />}
        </button>
      </form>
      { errorVisible && renderErrors() }
    </div>
  );
};

export default Search;
