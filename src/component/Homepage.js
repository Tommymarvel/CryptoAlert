// /* eslint-disable */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pullData } from '../redux/details/details';
import CoinList from './coinList';

const HomePage = () => {
  const coins = useSelector((state) => state.coins);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(pullData());
  }, [dispatch]);
  return (
    <>
      <h1>Details</h1>
      {coins.map((coin) => (
        <CoinList
          key={coin.coinId}
          name={coin.coinName}
        />
      ))}
    </>
  );
};

export default HomePage;
