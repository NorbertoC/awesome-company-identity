import React from 'react';
import './Home.scss';

import Header from '../sharedComponents/header/Header';
import DownArrow from '../sharedComponents/downArrow/DownArrow';

const Home = () => (
  <div className="home-container">
    <Header label="Home" />

    <div className="home-content-container">
      <p className="home-company-name">Awesome Company Name</p>
    </div>

    <div className="home-paragraph">
      <p className="paragraph-text">Stan here Chewbie, here we go.</p>
    </div>

    <div className="down-arrow">
      <DownArrow />
    </div>
  </div>
);

export default Home;
