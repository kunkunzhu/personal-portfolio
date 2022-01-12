import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Profile from './components/pages/Profile';
import Portfolio from './components/pages/Portfolio';
import Journal from './components/pages/Journal';
import Gallery from './components/pages/Gallery';
import ScrollToTop from './util/ScrollToTop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <ScrollToTop />
        <Switch>
          <Route path='/' exact component={Profile}/>
          <Route path='/gallery' component={Gallery}/>
          <Route path='/portfolio' component={Portfolio}/>
          <Route path='/journal' component={Journal}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;