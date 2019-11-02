import React, { Fragment, useState } from 'react';
import Navbar from './components/layout/Navbar/Navbar';
import Users from './components/users/Users';
import './App.scss';
import Search from './components/users/Search';
import Alert from './components/layout/Alert/Alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import User from './components/users/User';
import GithubState from './context/github/GithubState';

const App = () => { 

  const [alert, setAlert] = useState(null);

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
            <Route exact path='/user/:login' component={User} />

          </Switch>  

        </div>
      </Router>
    </GithubState>
  );
  
}

export default App;
