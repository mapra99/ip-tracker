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
  // const API_URL = 'http://localhost:3000/ips/1'; // toggle to this one if want to use the fake api
  const API_URL = 'https://geo.ipify.org/api/v1?apiKey=at_levWfnyHKew7xTeTGSEWH6n1eTkPn&ipAddress=';

  const [ip, setIp] = useState('');
  const [location, setLocation] = useState('');
  const [timezone, setTimezone] = useState('');
  const [isp, setIsp] = useState('');

  const loadData = (submittedIp) => (
    fetch(`${API_URL}${submittedIp}`)
      .then((response) => response.json())
      .then((data) => {
        setIp(data.ip);
        setLocation(`${data.location.city}, ${data.location.region}`);
        setTimezone(`UTC ${data.location.timezone}`);
        setIsp(data.isp);
      })
  );

  const triggerSearchApi = () => {
    const ip = document.querySelector('input#ip').value;
    loadData(ip);
  };

  const resultsVisible = () => (ip && location && timezone && isp);

  return (
    <>
      <Hero>
        <Search onClick={triggerSearchApi} />
        <Results visible={resultsVisible()}>
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
