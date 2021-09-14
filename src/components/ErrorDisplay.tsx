import React from 'react';
import bug from './bug.png';

type ErrorDisplayProps = {
  error: Error;
};

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ error }) => (
  <div style={{ color: 'red' }}>
    <h1>Oops, an error occurred</h1>
    <img src={bug} alt="A bug" width="500" />
    <h2>{error?.message}</h2>
    <hr />
    <pre>{error?.stack}</pre>
  </div>
);

export default ErrorDisplay;
