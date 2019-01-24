import React from 'react';
import './DownArrow.scss';
import downArrow from '../../assets/DownArrow.svg';

const DownArrow = () => (
  <div className="down-arrow-container">
    <img src={downArrow} alt="downArrow" className="image" />
  </div>
);

export default DownArrow;
