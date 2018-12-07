import React, { Component } from 'react'
import InputHabit from './components/input-habit'
import NavBar from './components/nav-bar'
import HabitList from './containers/habit-list'
import HabitDetail from './containers/habit-detail'

import './styles.css'



class App extends Component {
  


  render() {
    return (
      <div className="bodydiv">
        <NavBar />
        <div className="div-main-content">
          <h1>Habits App</h1>
          <InputHabit />
          <HabitList />
          <HabitDetail/>
        </div>
      </div>
    );
  }
}

export default App;
