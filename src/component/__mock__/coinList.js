/* eslint-disable */
import React from "react";
import { NavLink } from "react-router-dom";

const CoinList = () => {
  return (
    <NavLink to={`/details/bitcoin`} className="navlink">
      <div className="homeCard">
        <div>Bitcoin</div>
      </div>
    </NavLink>
  );
};

export default CoinList;
