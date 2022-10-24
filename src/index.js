import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import user from '../src/user';

const elem = user;
console.log(elem);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render();
