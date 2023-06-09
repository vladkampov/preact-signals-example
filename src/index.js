import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="container">
    <App />
    <footer className="footer">
        <h4>Repository is here: <a href="https://github.com/vladkampov/preact-signals-example" target="_blank">preact-signals-example</a></h4>
        <p><a href="https://bento.me/kampov" target="_blank"><img src="/me.png" alt="Vlad Kampov" /></a></p>
        <p><code>Created by <a href="https://bento.me/kampov"  target="_blank">Vlad Kampov</a> © 2023</code></p>
    </footer>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
