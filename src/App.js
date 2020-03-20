import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';
//import { render } from 'react-dom';

class App extends Component {
  state = {
    persons: [
      {
        name: 'Max',
        age: 28
      },
      {
        name: 'Berik',
        age: 36
      },
      {
        name: 'Cassandra',
        age: 25
      }
    ]
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {
          name: newName,
          age: 28
        },
        {
          name: 'Berik',
          age: 36
        },
        {
          name: 'Cassandra',
          age: 29
        }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Something</h1>
        <p>Something more</p>
        <button onClick={() => this.switchNameHandler('Maxiiiiiiiiiiiiim')}>Switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Berik')}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        >
          I'm his child
        </Person>
      </div>
    );
  }
}

export default App;
