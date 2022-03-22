import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

WebFont.load({
  google: {
    families: ['Inter:400,700'],
  },
});

const rootElement = document.getElementById('root');

ReactDOM.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint.
reportWebVitals();
