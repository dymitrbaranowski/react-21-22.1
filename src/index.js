import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

const element = React.createElement('div', {
  a: 5,
  b: 10,
  children: 'Привет !',
});

console.log(element);

// ReactDOM.render(element, document.getElementById('root'));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>{<App />}</React.StrictMode>
);
