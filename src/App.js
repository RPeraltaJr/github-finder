import React, { Fragment } from 'react';
import Navbar from './components/layout/Navbar/Navbar';
import Users from './components/users/Users';
import './App.scss';
import Search from './components/users/Search';
import Alert from './components/layout/Alert/Alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import User from './components/users/User';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => { 

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div>
            <Navbar />
            <Alert />

            <Switch>

              <Route exact path='/' render={props => (
                <Fragment>
                  <Search />
                  <Users />
                </Fragment>
              )} />

              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' component={User} />

            </Switch>  

          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
  
}

export default App;
