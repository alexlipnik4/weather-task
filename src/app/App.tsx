import React from 'react';

import WeatherPage from './components/pages/WeatherPage/WeatherPage.controller';
import FavoritesPage from './components/pages/FavoritesPage/FavoritesPage.controller';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.scss';

import Navbar from './components/Navbar/Navbar.controller';
import { ThemeProvider } from 'rmwc';

import { Typography } from 'rmwc';

import lightTheme from './common/themes/lightTheme';
import darkTheme from './common/themes/darkTheme';

import { connect } from 'react-redux';

function App(props: any) {
  return (
    <ThemeProvider
      style={{flex: '1'}}
      options={props.weather.themeIsLight ? lightTheme : darkTheme}
    >
      <div className="app mdc-theme--secondary-bg">
        <Router>
          <div className="app__header">
            <Typography className="app__headline" use="headline5">Weather Task</Typography>
            <Navbar />
          </div>


          <Route exact path="/" component={WeatherPage} />
          <Route exact path="/favorites" component={FavoritesPage} />
        </Router>
      </div>
    </ThemeProvider>
  );
}

const mapStateToProps = (state: any) => {
  return {
      weather: state.weather
  }
};
export default connect(mapStateToProps)(App);
