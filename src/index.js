import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'react-image-lightbox/style.css';
import './index.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ParallaxProvider } from 'react-scroll-parallax';
import AllContext from './context/AllContext';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.Fragment>
    <BrowserRouter basename={'/newsilva'}>
      <AllContext>
        <ParallaxProvider>
          <GoogleOAuthProvider clientId='619560474308-u5d68c0vgfnvlsonqs7iotgvqapb0cpa.apps.googleusercontent.com'>
            <App />
          </GoogleOAuthProvider>
        </ParallaxProvider>
      </AllContext>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
