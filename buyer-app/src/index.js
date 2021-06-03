import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import FullPage from './calendar'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
const providers = require('./providerData.json')

ReactDOM.render(
  <Router>
    <switch>
      <Route exact path = "/" component = {App} />
      <Route exact path = "/calendar" component = {FullPage} />

    </switch>
  </Router>
,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
