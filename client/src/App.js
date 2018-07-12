import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { users: [] }
  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(({ data }) => this.setState({ users: data }));
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map(user =>
          user
        )}
      </div>
    );
  }
}

export default App;
