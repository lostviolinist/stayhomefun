import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import './App.css';
import Toolbar from './components/Toolbar/Toolbar'
import HomePage from './components/HomePage/HomePage'
import CategoryPage from './components/CategoryPage/CategoryPage'
import Footer from './components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <Router>
      <header className="nav">
              <Toolbar /> 
      </header>
      <div className="App container">
      <Route path="/" component={HomePage} exact />
      <Route path="/category" component={CategoryPage} exact />
          
      </div>
      <footer className="">
              <Footer />
          </footer>
      </Router>
    )
  }

  


}

export default App;
