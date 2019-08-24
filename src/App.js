import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../src/containers/Home'
import Cart from '../src/containers/Cart'
import Login from '../src/containers/Login'
import Register from '../src/components/Register'
import axios from './axios'

class App extends Component {

  state = {}

  _onLogin = () => {
    axios.post("/api/v1/auth",{
      username: "admin",
      password: "admin"
    })
    .then(res => {
      this.setState({
        username: res.data.username,
        id: res.data.id
      })
    })
    .catch(err => console.log(err))
  }

  _onRegister = () => {
    axios.post("/api/v1/user", {
      username: "admin",
      password: "admin"
    })
    .then(res => {
      this.setState({
        username: res.data.username,
        id: res.data.id
      })
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
          <Route exact path="/" render={(props) => (
            <Home {...props}  username={this.state.username} onLogin={this._onLogin}/>
          )} />
          <Route exact path="/cart" render={(props) => (
            <Cart {...props} />
          )} />
          {/* <Route exact path="/blog" render={(props) => (
            <Home {...props}  username={this.state.username} onLogin={this._onLogin}/>
          )} />
          <Route exact path="/about_us" render={(props) => (
            <Home {...props}  username={this.state.username} onLogin={this._onLogin}/>
          )} />
          <Route exact path="/contact_us" render={(props) => (
            <Home {...props}  username={this.state.username} onLogin={this._onLogin}/>
          )} /> */}
          <Route exact path="/login" render={(props) => (
            <Login />
          )} />
          <Route exact path="/register" render={(props) => (
            <Register />
          )} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
