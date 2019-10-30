import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import './App.scss';
import axios from 'axios';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';

class App extends Component {

  state = {
    users: [],
    loading: false,
    alert: null
  }

  // Search Github users
  searchUsers = async (search) => {

    if( search.trim() !== '' ) {
      // * if not empty
      this.setState({ loading: true, alert: null });
      const res = await axios.get(`https://api.github.com/search/users?q=${search}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      this.setState({ users: res.data.items, loading: false });
    } 

  }

  // Clear users from state
  clearUsers = () => this.setState({ users: [], loading: false });

  // Set Alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type }});
    setTimeout(() => this.setState({ alert: null }), 5000);
  }

  render() {
    
    const { users, loading, alert } = this.state;

    return (
      <div>
        <Navbar />
        <Alert alert={alert} />
        <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={ users.length > 0 ? true : false } setAlert={this.setAlert} />
        <Users loading={loading} users={users} />
      </div>
    );
  }
}

export default App;
