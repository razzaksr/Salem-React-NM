import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import { Read } from './components/read';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Read/>
  </>
);
