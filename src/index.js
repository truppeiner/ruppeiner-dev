import React from "react";
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";
// eslint-disable-next-line
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>
  );
