// library dependencies
import React, { useState, useEffect } from 'react';

// components
import Hero from '../components/Hero';
import Search from '../components/Search';
import Results from '../components/Results';
import ResultItem from '../components/ResultItem';
import Map from '../components/Map';

// assets
import '../assets/styles/containers/App.scss';

const App = () => {
  const API = 'http://localhost:3000/ips/1';
  const [resultsVisible, setResultsVisible] = useState(false);

  const [ip, setIp] = useState('');
  const [location, setLocation] = useState('');
  const [timezone, setTimezone] = useState('');
  const [isp, setIsp] = useState('');

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setResultsVisible(true);
        setIp(data.ip);
        setLocation(`${data.location.city}, ${data.location.region}`);
        setTimezone(`UTC ${data.location.timezone}`);
        setIsp(data.isp);
      });
  }, []);

  return (
    <>
      <Hero>
        <Search />
        <Results visible={resultsVisible}>
          <ResultItem title='IP Address' value={ip} additionalClass='first-item' />
          <ResultItem title='Location' value={location} />
          <ResultItem title='Timezone' value={timezone} />
          <ResultItem title='ISP' value={isp} additionalClass='last-item' />
        </Results>
      </Hero>
      <Map />
    </>
  );
};

export default App;
