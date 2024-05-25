import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App.jsx';
import ConditionalList from './ConditionalList.jsx'; // Import the ConditionalList component
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <ConditionalList /> {/* Render the ConditionalList component */}
  </React.StrictMode>,
  document.getElementById('root')
);