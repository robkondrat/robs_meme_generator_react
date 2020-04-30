import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'

ReactDom.render(
  <Router> 
    <Route path="/" component={App} />
  </Router>

  , document.getElementById("root"))
