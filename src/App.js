import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import './App.css';
import Toolbar from './components/Toolbar/Toolbar'
import HomePage from './components/HomePage/HomePage'
import CategoryPage from './components/CategoryPage/CategoryPage'
import ReactGA from 'react-ga';

import Footer from './components/Footer/Footer'

// https://github.com/malcolm-kee/the-forum



/* {
  "metadata": {
    "entertainment": {
      "desc" : "May cause too many wasted hours on the Internet, proceed with caution "
    }
  },
  "data": {
    "entertainment" : {
      "-M5CidpheAnSlB3eiHf5" : {
        "desc" : "Group video chat for friends",
        "link" : "https://houseparty.com/",
        "title" : "HouseParty"
      }, 
    }

    {
  "value": {
    "history": "{action: \"POP\", block: ƒ block() {}, createHref: ƒ …}",
    "location": "{hash: \"\", pathname: \"/category/news\", search: \"\", …}",
    "match": null
  },
  "children": null

  'http://localhost:3000/category/news'

  match:
path: "/category/:routeId"
url: "/category/news"
isExact: true
}
*/

class App extends Component {
  
  
  
  render() {
    return (
      <Router>
        <header className="nav">
          <Toolbar />
        </header>
        <div className="App container">
          <Route path="/" render={() => <HomePage />}  exact />
          <Route path="/category/:categoryId" render={(routeProps) => {
            console.log({
              routeProps
            })
          
          return <CategoryPage category={routeProps.match.params.categoryId} />}} />
        </div>
        <footer class="mt-5"className="">
          <Footer />
        </footer>
      </Router>
    )
  }
}

export default App;
