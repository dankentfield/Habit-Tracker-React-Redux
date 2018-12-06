import React, { Component } from 'react';
import InputHabit from './components/input-habit';
import NavBar from './components/nav-bar'
import './styles.css'



class App extends Component {
  render() {
    return (
      <div className="bodydiv">
        <NavBar />
        <div className="div-main-content">
          <h1>Habits App</h1>
          <InputHabit />
        </div>
      </div>
    );
  }
}

export default App;
