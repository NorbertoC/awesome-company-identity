import React from 'react';
import './Home.scss';

import Header from '../sharedComponents/header/Header';
import DownArrow from '../sharedComponents/downArrow/DownArrow';

const Home = () => (
  <div className="home-container">
    <Header label="Home" />

    <div className="home-container--title-container">
      <p className="home-container--title-container__title">Awesome Company Name</p>
    </div>

    <div className="home-container--slogan-container">
      <p className="home-container--slogan-container__text">Insert awesome slogan here</p>
    </div>

    <div className="home-container__arrow">
      <DownArrow />
    </div>
  </div>
);

export default Home;
