import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import './App.css';
import Toolbar from './components/Toolbar/Toolbar'
import HomePage from './components/HomePage/HomePage'

class App extends Component {
  render() {
    return (
      <Router>
      <header className="nav">
              <Toolbar /> 
      </header>
      <div className="App container">
      <Route path="/" component={HomePage} exact />
          
      </div>
      </Router>
    )
  }

  


}

export default App;
