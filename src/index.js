import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";

const initialState = {
  count: 0,
  test: true,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "increment": {
      const newState = {
        count: state.count + 1,
      };
      return newState;
    }
    case "decrement": {
      const newState = {
        count: state.count - 1,
      };
      return newState;
    }
      
    default:
      return state;
  }
}

const allstore = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={allstore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

/*REDUX
store - хранилище всех общих состояний приложения, объект JS
reducer - функция, прнимающая состояние и действие и возвращающая новое состояние
action - 

*/

/*REACT-REDUX
Provider - компонент провайдер как в контексте
connect - функция 
*/
