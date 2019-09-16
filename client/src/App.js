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
      list: JSON.parse(localStorage.getItem('filtered')) || []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
      .then(res => {
        this.setState({ data: res.data })
      })
      .catch(err => console.log(err))
  }

  handleSubmit = (country) => {
    localStorage.setItem('filtered', JSON.stringify(this.state.data.filter(player => player.country === country)))
    this.setState({ list: this.state.data.filter(player => player.country === country)})
  }

  resetForm = () => {
    localStorage.setItem('filtered', JSON.stringify([]))
    this.setState({ list: []})
  }
 

  render() {
    return (
      <div className="App">
        <SearchForm
          countries={this.state.data}
          handleSubmit={this.handleSubmit}
          resetForm={this.resetForm}

        />
        <Players
          list={this.state.list.length === 0 ? this.state.data : this.state.list }/>
    </div>
    );
  }
}

export default App;

