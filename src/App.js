import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import './App.scss';
import axios from 'axios';
import Search from './components/users/Search';

class App extends Component {

  state = {
    users: [],
    loading: false
  }

  // Search Github users
  searchUsers = async (search) => {

    if( search.trim() !== '' ) {
      // * if not empty
      this.setState({ loading: true });
      const res = await axios.get(`https://api.github.com/search/users?q=${search}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      this.setState({ users: res.data.items, loading: false });
    } 

  }

  // Clear users from state
  clearUsers = () => this.setState({ users: [], loading: false });

  render() {
    
    const { users, loading } = this.state;

    return (
      <div>
        <Navbar />
        <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={ users.length > 0 ? true : false } />
        <Users loading={loading} users={users} />
      </div>
    );
  }
}

export default App;
