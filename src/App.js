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

    } else {
      // * default
      this.setState({ loading: true });
      const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      // console.log(res.data);
      this.setState({ users: res.data, loading: false });
    }

  }

  render() {
    return (
      <div>
        <Navbar />
        <Search searchUsers={this.searchUsers} />
        <Users loading={this.state.loading} users={this.state.users} />
      </div>
    );
  }
}

export default App;
