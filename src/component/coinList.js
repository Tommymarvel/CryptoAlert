/* eslint-disable */
import React from "react";

const CoinList = (props) => {
  const { coinId, coinName, coinRank, coinSymbol } = props;

  return (
    <div>
      <div>{coinId}</div>
      <div>{coinName}</div>
      <div>{coinRank}</div>
      <div>{coinSymbol}</div>
    </div>
  );
};

export default CoinList;
