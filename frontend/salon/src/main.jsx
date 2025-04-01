import React from 'react';
import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from "@react-oauth/google";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="process.env.GOOGLE_CLIENT_ID">
    <StrictMode>
      <App />
    </StrictMode>
  </GoogleOAuthProvider>
)
