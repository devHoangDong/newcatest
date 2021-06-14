import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './scss/fonts.css'
import { AppRouter } from './routes';
import * as serviceWorker from './serviceWorker';
import { GoogleAuthProvider } from './GoogleAuthen';
import { useSelector, Provider } from 'react-redux';
import store from './redux/store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GoogleAuthProvider>
        <AppRouter />
      </GoogleAuthProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
