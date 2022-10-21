// /* eslint-disable */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pullData } from '../redux/details/details';
import CoinList from './coinList';

const HomePage = () => {
  const coins = useSelector((state) => state.details.details);
  const dispatch = useDispatch();

  const toRender = coins.map((coin) => <CoinList key={coin.rank} item={coin} />);

  useEffect(() => {
    dispatch(pullData());
  }, [dispatch]);
  return (
    <>
      <h1>TOP CURRENCIES</h1>
      <div className="list">{toRender}</div>
    </>
  );
};

export default HomePage;
