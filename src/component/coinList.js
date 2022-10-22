/* eslint-disable */
import React from 'react';
import { NavLink } from 'react-router-dom';

const CoinList = (props) => {
  const { item } = props;

  return (
    <NavLink to={`/details/${item.id}`} state={item} className="navlink">
      <div className="homeCard">
        <div>{item.name}</div>
      </div>
    </NavLink>
  );
};

export default CoinList;