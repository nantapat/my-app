import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id:'name1' ,name: 'Max', age: 28},
      {id:'name2' ,name: 'Manu', age: 29},
      {id:'name3' ,name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value',
    showPersons: false,
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    // console.log("Person Index", personIndex)
    let person = this.state.persons[personIndex]
    // const person = Object.assign({}, this.state.persons[personIndex])
    person.name = event.target.value;

    let persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons}, () => console.log("Persons", this.state.persons))
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState( { persons:persons } )
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  renderPerson = () => {
    return this.state.showPersons && (
      <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            onChange={(event) => this.nameChangeHandler(event, person.id)}/>
          })}
      </div>
    )
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {this.renderPerson()}
      </div>
    );
  }
}

export default App;
