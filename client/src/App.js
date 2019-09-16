import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import Players from './Components/Players';
import SearchForm from './Components/SearchForm';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      list: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
      .then(res => {
        this.setState({ data: res.data })
        this.setState({ list: res.data })
      })
      .catch(err => console.log(err))
  }


  render() {
    return (
      <div className="App">
        <SearchForm
          data={this.state.data}
          />
        <Players
          data={this.state.list }/>
    </div>
    );
  }
}

export default App;

