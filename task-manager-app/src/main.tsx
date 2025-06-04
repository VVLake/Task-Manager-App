import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <Auth0Provider
      domain="dev-zhgcjyor36u50cs8.us.auth0.com"
      clientId="cS3gBd1rxhIVg13BsLWk32E0ydjoyR9V"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      useRefreshTokens={true}
      cacheLocation="localstorage"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);