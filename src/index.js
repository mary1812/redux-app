import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import store from "./store/index"

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
action - объект, в котором есть свойство type, и может быть доп инфа

*/

/*REACT-REDUX
Provider - компонент провайдер как в контексте
connect - функция для подписки компонента на обновления хранилища
mapStateToProps - 
*/
