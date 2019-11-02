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
import GithubState from './context/github/GithubState';

const App = () => { 

  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  // * Get user's repos
  const getUserRepos = async (username) => {
    setLoading(true);
    setAlert(null);
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=10&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setRepos(res.data);
    setLoading(false);
  }

  // * Set Alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    // this.setState({ alert: { msg: msg, type: type }});
    setTimeout(() => setAlert(null), 5000);
  }

  return (
    <GithubState>
      <Router>
        <div>
          <Navbar />
          <Alert alert={alert} />

          <Switch>

            <Route exact path='/' render={props => (
              <Fragment>
                <Search showAlert={showAlert} />
                <Users />
              </Fragment>
            )} />

            <Route exact path='/about' component={About} />
            <Route exact path='/user/:login' render={props => (
              // Use { ...props } to get (allow) params value
              <User { ...props } getUserRepos={getUserRepos} repos={repos} />
            )} />

          </Switch>  

        </div>
      </Router>
    </GithubState>
  );
  
}

export default App;
