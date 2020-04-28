
import React, { Component } from 'react';
import './App.css';
import API from "./utils/API";
import EmployeeTable from './components/EmployeeTable';
import Searchbar from './components/Searchbar';

class App extends Component {
  state = {
    allEmployees: [],
    filteredEmployees: []
  }
  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    API.getUsers()
      .then(res => {
        console.log(res.data.results);
        this.setState({
          allEmployees: res.data.results,
          filteredEmployees: res.data.results
        })
      })
      .catch(err => console.log(err));
  };

  filterUser = searchText => {
    const filtered = this.state.allEmployees.filter(employee => {
      const eText = `${employee.name.first} ${employee.name.last} ${employee.email}`.toLowerCase();
      return eText.includes(searchText.toLowerCase());
    });
    this.setState({ filteredEmployees: filtered })
  }

  render() {
    return (
      <div className="App">

        <h1>Employee Directory</h1>

        <Searchbar
          filter={this.filterUser}
        />
        <EmployeeTable
          employees={this.state.filteredEmployees} />
      </div>
    );
  }

}

export default App;
