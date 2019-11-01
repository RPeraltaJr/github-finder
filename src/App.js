import React, { Fragment, useState } from 'react';
import Navbar from './components/layout/Navbar/Navbar';
import Users from './components/users/Users';
import './App.scss';
import axios from 'axios';
import Search from './components/users/Search';
import Alert from './components/layout/Alert/Alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import User from './components/users/User';

const App = () => { 

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  // * Search Github users
  const searchUsers = async (search) => {
    // * if not empty
    if( search.trim() !== '' ) { 
      setLoading(true);
      setAlert(null);
      const res = await axios.get(`https://api.github.com/search/users?q=${search}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      setUsers(res.data.items);
      setLoading(false);
    } 
  }

  // * Get single Github user
  const getUser = async (username) => {
      setLoading(true);
      setAlert(null);
      const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      setUser(res.data);
      setLoading(false);
  }

  // * Get user's repos
  const getUserRepos = async (username) => {
    setLoading(true);
    setAlert(null);
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=10&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setRepos(res.data);
    setLoading(false);
  }

  // * Clear users from state
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  }

  // * Set Alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    // this.setState({ alert: { msg: msg, type: type }});
    setTimeout(() => setAlert(null), 5000);
  }

  return (
    <Router>
      <div>
        <Navbar />
        <Alert alert={alert} />

        <Switch>

          <Route exact path='/' render={props => (
            <Fragment>
              <Search searchUsers={searchUsers} clearUsers={clearUsers} showClear={ users.length > 0 ? true : false } showAlert={showAlert} />
              <Users loading={loading} users={users} />
            </Fragment>
          )} />

          <Route exact path='/about' component={About} />
          <Route exact path='/user/:login' render={props => (
            // Use { ...props } to get (allow) params value
            <User { ...props } getUser={getUser} getUserRepos={getUserRepos} user={user} repos={repos} loading={loading} />
          )} />

        </Switch>  

      </div>
    </Router>
  );
  
}

export default App;
