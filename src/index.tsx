import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {  RouterProvider } from 'react-router';
import { router } from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { AuthContextProvider } from './contexts/AuthContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <AuthContextProvider>
    <RouterProvider router={router} />
  </AuthContextProvider>
);

