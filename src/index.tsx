import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { AuthProvider } from './providers/auth'
import { GameProvider } from './providers/store'



ReactDOM.render(
    <GameProvider>
      <AuthProvider>
        <App />
      </AuthProvider >
    </GameProvider>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();