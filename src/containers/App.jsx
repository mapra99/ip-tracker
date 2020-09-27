// library dependencies
import React, { useState } from 'react';

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
  const API_URL = 'https://geo.ipify.org/api/v1?apiKey=at_levWfnyHKew7xTeTGSEWH6n1eTkPn';

  const [loading, setLoading] = useState(false);
  const [ip, setIp] = useState('');
  const [location, setLocation] = useState('');
  const [timezone, setTimezone] = useState('');
  const [isp, setIsp] = useState('');
  const [errorVisible, setErrorVisible] = useState(false);

  const loadData = (searchTerm, loadByIp) => (
    fetch(loadByIp ? `${API_URL}&ipAddress=${searchTerm}` : `${API_URL}&domain=${searchTerm}`)
      .then((response) => {
        if (!response.ok) throw Error(response.messages);
        return response;
      })
      .then((response) => response.json())
      .then((data) => {
        setIp(data.ip);
        setLocation(`${data.location.city}, ${data.location.region}`);
        setTimezone(`UTC ${data.location.timezone}`);
        setIsp(data.isp);
        setErrorVisible(false);
      })
      .catch((error) => {
        console.error(error);
        setErrorVisible(true);
      })
      .finally(() => setLoading(false))
  );

  const isAnIpAddress = (ip) => (/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/.test(ip));

  const triggerSearchApi = (event) => {
    const searchTerm = document.querySelector('input#search-term').value;
    setLoading(true);
    loadData(searchTerm, isAnIpAddress(searchTerm));
    event.preventDefault();
  };

  const areResultsReady = () => (ip && location && timezone && isp);

  return (
    <>
      <Hero>
        <Search onSubmit={triggerSearchApi} loading={loading} errorVisible={errorVisible} />
        <Results visible={areResultsReady()}>
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
