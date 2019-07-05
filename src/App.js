import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {
  state = {
    persons : [
      {name: "Prashant", age:28},
      {name: "Shishir", age:29},
      {name: "Swati", age:30}
    ]
  };

  switchNameHandler = () =>{
    console.log("was clicked")
  };
  render() {
    return (
      <div className="App">
          <h1>React app H1 content</h1>
        <button onClick={this.switchNameHandler}>Update</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}> My Hobbies are : Photography</Person>
      </div>
    );
    //   return React.createElement('div', {className:'my-class'}, React.createElement('h1', null, 'Hello in h1 tag'));
  }
}

export default App;
