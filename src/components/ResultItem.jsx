// library dependencies
import React from 'react';

// assets
import '../assets/styles/components/ResultItem.scss';

const ResultItem = ({ additionalClass, title, value }) => (
  <div className={`result ${additionalClass}`}>
    <h2>{title}</h2>
    <p>{value}</p>
  </div>
);

ResultItem.defaultProps = {
  additionalClass: ''
};

export default ResultItem;
