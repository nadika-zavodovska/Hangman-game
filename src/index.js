import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Create a root element using ReactDOM.createRoot and assign it to a constant called 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component wrapped in a <React.StrictMode> element to the 'root' element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
