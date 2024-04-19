import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { BrowserRouter} from 'react-router-dom';

const container = document.getElementById('contain');
if (!container) throw new Error('Failed to find the root container');
const root = createRoot(container);

root.render(
  <DndProvider backend={HTML5Backend}>
    <React.StrictMode>
        <App/>
    </React.StrictMode>
  </DndProvider>
);

reportWebVitals();