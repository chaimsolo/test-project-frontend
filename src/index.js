import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import reportWebVitals from './reportWebVitals';
import MyRouter from './components/router';
import { ModalProvider } from './contexts/modalContext';
import { LoadingProvider } from './contexts/loadingContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModalProvider>
      <LoadingProvider>
        <MyRouter />
      </LoadingProvider>
    </ModalProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
