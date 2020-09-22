// library dependencies
import React from 'react';

// components
import Hero from '../components/Hero';
import Search from '../components/Search';
import Results from '../components/Results';
import ResultItem from '../components/ResultItem';
import Map from '../components/Map';

// assets
import '../assets/styles/containers/App.scss';

const App = () => (
  <>
    <Hero>
      <Search />
      <Results>
        <ResultItem title='IP Address' value='192.212.174.101' />
        <ResultItem title='Location' value='Brooklyn, NY 10001' />
        <ResultItem title='Timezone' value='UTC -05:00' />
        <ResultItem title='ISP' value='SpaceX Starlink' />
      </Results>
    </Hero>
    <Map />
  </>
);

export default App;
