import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import Home from './components/Home';

function App() {
  return (
    <div className="App ">
      <Switch>
        <Route exact path="/">
          <Header />
          <Banner />
        </Route>
        <Route exact path={'/channels'}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
