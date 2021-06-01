import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { AppRouter } from './routes';
import * as serviceWorker from './serviceWorker';
import { GoogleAuthProvider } from './GoogleAuthen';



const eventLogger = (event: unknown, error: unknown) => {
  console.log('onKeycloakEvent', event, error)
}

const tokenLogger = (tokens: unknown) => {
  console.log('onKeycloakTokens', tokens)
  localStorage.setItem('keycloakTokens', JSON.stringify(tokens));
}

ReactDOM.render(
  <React.StrictMode>
      <GoogleAuthProvider>
        <AppRouter />
      </GoogleAuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
