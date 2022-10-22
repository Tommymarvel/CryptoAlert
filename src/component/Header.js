import React from 'react';
import { FaArrowLeft, FaMicrophone, FaRegSun } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <h1> CryptoMarket</h1>
    <div>
      <NavLink to="/">
        <FaArrowLeft />
      </NavLink>
      <FaMicrophone />
      <FaRegSun />
    </div>
  </div>
);

export default Header;
