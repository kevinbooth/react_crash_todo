import React, { Component } from 'react';
import Todos from './components/Todos';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: true
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }

  markComplete = () => {
    
  }

  render() {
    return (
      <div className="App">
        <Todos todos={ this.state.todos } markComplete={ this.markComplete }/>
      </div>
    );
  }
}

export default App;
