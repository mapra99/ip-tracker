import React from 'react';
import '../assets/styles/containers/App.scss';
import dummyImage from '../assets/static/images/dummyImage.png';

const App = () => (
  <div>
    <h1>Hello World!</h1>
    <img src={dummyImage} alt='' />
  </div>
);

export default App;
