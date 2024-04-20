import React,{useState} from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { GoogleOAuthProvider } from '@react-oauth/google';

const container = document.getElementById('contain');
if (!container) throw new Error('Failed to find the root container');
const root = createRoot(container);
root.render(
  
    <DndProvider backend={HTML5Backend}>
      <React.StrictMode>
        <GoogleOAuthProvider clientId={`${process.env.REACT_APP_CLIENT_ID}`}>
          <App />
        </GoogleOAuthProvider>
      </React.StrictMode>
    </DndProvider>
);

reportWebVitals();