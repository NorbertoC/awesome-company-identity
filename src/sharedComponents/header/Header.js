import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import burgerImg from '../../assets/Burguer.svg';
import logoImg from '../../assets/Logo.svg';

const Header = ({ label }) => (
  <div className="header-container">
    <p className="header-container__title">{label}</p>
    <img src={logoImg} alt="Logo" className="header-container__logo" />
    <img src={burgerImg} alt="burger" className="header-container__burguer" />
  </div>
);

Header.defaultProps = {
  label: 'Holaaa',
};

Header.propTypes = {
  label: PropTypes.string,
};


export default Header;
