import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Square from "./components/Square";
import SquareBoard from "./components/SquareBoard";

ReactDOM.render(
  <React.StrictMode>
      <p>Gra w życie</p>
      <SquareBoard>
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </SquareBoard>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
