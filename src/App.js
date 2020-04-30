import React from "react"
import "./App.css"
import Header from "./Header"
import MemeGenerator from "./MemeGenerator"
import AllMemes from "./AllMemes"
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={AllMemes} />
        <Route exact path="/apples" component={MemeGenerator} />
      </Switch>
      
    </div>
  )
}

export default App


