import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@material-ui/core";
import moment from "moment";
import MomentUtils from '@date-io/moment';
import "moment/locale/fr";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

moment.locale("fr-ca")

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <MuiPickersUtilsProvider
        // libInstance={moment}
        utils={MomentUtils}
        // locale={"fr-ca"}
      >
        <App />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
