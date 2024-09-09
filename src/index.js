import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Menu } from './Menu';
const Name = ''
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Menu />
    <iframe src='https://i-tns.ru/v2/#/auth' allow='fullscreen' className='site' title='none'></iframe>
  </React.StrictMode>
);