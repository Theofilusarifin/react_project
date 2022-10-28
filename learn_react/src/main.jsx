import React from 'react';
import ReactDOM from 'react-dom/client';

// Import Bootstap from node module
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// Manggil APP JS
import App from './App';

// Ambil element ID ROOT
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
