import React from 'react';
import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from "@react-oauth/google";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
//<<<<<<< HEAD
  <GoogleOAuthProvider clientId="process.env.GOOGLE_CLIENT_ID">

  <GoogleOAuthProvider clientId="process.env.GOOGLE_Client_ID">
</GoogleOAuthProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </GoogleOAuthProvider>
)
