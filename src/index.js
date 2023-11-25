import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import CoctailsContextProvider from './services/contexts/coctailscontext';

ReactDOM.render(
    <React.StrictMode>
        <CoctailsContextProvider>
            <App />
        </CoctailsContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);