import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import { App } from 'components/App';
import './index.css';

const router = createBrowserRouter({});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/react-crud-app">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
