import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorDisplay from './components/ErrorDisplay';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorDisplay}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
