import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

const root = ReactDOM.createRoot(
  document.getElementById('contain') as HTMLElement
);
root.render(
  <DndProvider backend={HTML5Backend}>
    <React.StrictMode>
        <App/>
    </React.StrictMode>
  </DndProvider>
);

reportWebVitals();