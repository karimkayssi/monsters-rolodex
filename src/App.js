//import * as React from "react";
//import axios from 'axios';
import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from  './components/search-box/search-box.component';
import './App.css';


// function App() {
//§   return (
//    <div></div>
//   );
// }
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };

  //this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  // fetchRandomData = () => {
  //   this.setState({ counter: this.state.counter + 1 })
  //   return axios.get(`https://jsonplaceholder.typicode.com/users`)
  //     .then(res => {
  //       console.log(res);
  //       return res;
  //     })
  //     .catch(err => { 
  //       console.error(err);
  //     });
  //state = { counter: 0 }


  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }


render() {
 
  //Destructuring
  const { monsters, searchField } = this.state;
  //This is equivalent to:
  // const monsters = this.state.monsters;
  // const searchField = this.state.searchField;
  // But is just easier and quicker to write this out
  const filteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
  return (
    <div className='App'>

      <h1>Monsters Rolodex</h1>

      {/* <input
      type='search'
      placeholder='Search monsters' 
      onChange={ e => { this.setState({searchField: e.target.value})}}
      //   , () => console.log(this.state)
      //   );
      //   }}
      /> */}
      <SearchBox 
      placeholder='Search monsters' 
      handleChange={this.handleChange}
      />
      <CardList monsters={filteredMonsters} />
      {/* <header className="App-header">
          <p>
            {this.state.counter}
          </p>
          <button onClick={() => {
            this.fetchRandomData();
          }}>Fetch Random Data</button>
        </header> */}

        {this.state.searchField === "" && <div>empty</div>}
    </div>
  );
}
}

export default App;
