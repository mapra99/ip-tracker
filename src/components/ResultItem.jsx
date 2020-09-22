// library dependencies
import React from 'react';

const ResultItem = ({ additionalClass, title, value }) => (
  <div className={`result ${additionalClass}`}>
    <h2>{title}</h2>
    <span>{value}</span>
  </div>
);

export default ResultItem;
