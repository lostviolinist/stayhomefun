import React, {Component} from 'react';
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
  initializeFirebase = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }

  componentDidMount() {
    // firebase.database().ref('/news/').set([
    //   {
    //     title: "coronatracker",
    //     desc: "Track cases around the world",
    //     link : "https://www.coronatracker.com/"
    //   },
    //   {
    //     title: "worldmeters",
    //     desc: "Visualization around the world",
    //     link : "https://www.worldometers.info/coronavirus/"
    //   },
    //   {
    //     title: "WHO",
    //     desc: "Get news from verified sources...not WhatsApp University 2020",
    //     link : "https://www.who.int/"
    //   }
    // ]);

    // firebase.database().ref('health/').set()

    firebase.database().ref('/news/').once('value').then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        console.log(childSnapshot.val());
      })
    })
  }


  render() {
    this.initializeFirebase();
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
