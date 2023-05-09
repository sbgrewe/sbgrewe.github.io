import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import { createHashRouter, RouterProvider } from 'react-router-dom';


//const router = createHashRouter([{ path: "/", element: <App />, }]);

    //<RouterProvider router={router} />

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);