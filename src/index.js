import React from 'react';
import ReactDOM from 'react-dom';
import GlobalContext from './Global/GlobalState';
import GlobalState from './Global/GlobalState';
import './index.css';
import Routes from './Routes';



ReactDOM.render(
  <GlobalContext.Provider value={GlobalState}>
        <React.StrictMode>
      <Routes />
    </React.StrictMode>    
  </GlobalContext.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

