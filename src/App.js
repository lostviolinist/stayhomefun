import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import './App.css';
import Toolbar from './components/Toolbar/Toolbar'
import HomePage from './components/HomePage/HomePage'
import CategoryPage from './components/CategoryPage/CategoryPage'
import firebase from 'firebase';
import Footer from './components/Footer/Footer'

const firebaseConfig = {
  apiKey: "AIzaSyDzVmfz8rRKuC2MxwxmYRUyQ7pH3vAU0_4",
  authDomain: "stayhomefun-698b6.firebaseapp.com",
  databaseURL: "https://stayhomefun-698b6.firebaseio.com",
  projectId: "stayhomefun-698b6",
  storageBucket: "stayhomefun-698b6.appspot.com",
  messagingSenderId: "573258055182",
  appId: "1:573258055182:web:99f68c90f4b389fbe7865f",
  measurementId: "G-35TRCM7NLQ"
};

class App extends Component {
  constructor(props) {
    super(props);
    // every object stored in the following arrays have the 'title', 'desc', 'link' attributes
    // e.g. retrieve news title by doing this.state.news[0].title
    this.state = {
      news: [],
      health: [],
      groceries: [],
      food: [],
      learning: [],
      entertainment: []
    };
  }

  componentDidMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    let categories = [this.state.news, this.state.health, this.state.groceries, this.state.food, this.state.learning, this.state.entertainment]
    let category_string = ["news", "health", "groceries", "food", "learning", "entertainment"]

    category_string.forEach((category, index) => {
      firebase.database().ref(category).once('value').then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
          categories[index].push(childSnapshot.val());
        })
      })
    })
  }

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
