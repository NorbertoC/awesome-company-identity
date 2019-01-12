import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import burgerImg from '../../assets/Burguer.png';
import logoImg from '../../assets/Logo.png';

const Header = ({ label }) => (
  <div className="header-container">
    <p className="label">{label}</p>
    <img src={logoImg} alt="burger" width="106" height="47" className="image" />
    <img src={burgerImg} alt="burger" width="18" height="16" className="image" />
  </div>
);

Header.defaultProps = {
  label: 'Holaaa',
};

Header.propTypes = {
  label: PropTypes.string,
};


export default Header;
