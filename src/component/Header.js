import React from 'react';
import { FaArrowLeft, FaMicrophone, FaRegSun } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <h1> CryptoMarket</h1>
    <NavLink to="/">
      <FaArrowLeft />
    </NavLink>
    <FaMicrophone />
    <FaRegSun />
  </div>
);

export default Header;
