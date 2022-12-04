import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/home';
import Css from './pages/css';
import Html from './pages/html';
import Javascript from './pages/javascript';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Notfond</h1>
  },
  {
    path: "/css",
    element: <Css />,
  },
  {
    path: "/html",
    element: <Html />,
  },
  {
    path: "/javascript",
    element: <Javascript />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('g'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

 
