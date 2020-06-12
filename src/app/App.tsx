import React from 'react';

import WeatherPage from './components/pages/WeatherPage/WeatherPage.controller';
import FavoritesPage from './components/pages/FavoritesPage/FavoritesPage';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.scss';

import Navbar from './components/Navbar/Navbar.controller';

import { Typography } from 'rmwc';

function App() {
  return (
    <div className="app">
      <Router>
        <div className="app__header">
          <Typography use="headline5">Weather Task</Typography>
          <Navbar />
        </div>


        <Route exact path="/" component={WeatherPage} />
        <Route exact path="/favorites" component={FavoritesPage} />
      </Router>
    </div>
  );
}

export default App;
