import React from 'react';
import './DownArrow.scss';
import downArrow from '../../assets/DownArrow.png';

const DownArrow = () => (
  <div className="down-arrow-container">
    <img src={downArrow} alt="arrow" width="21" height="10" className="image" />
  </div>
);

export default DownArrow;
