import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from './Header';
import './DetailsPage.css';
import { pullData } from '../redux/details/details';

function DetailsPage() {
  const state = useSelector((state) => state.details.details);
  const dispatch = useDispatch();
  const { name } = useParams();
  useEffect(() => {
    dispatch(pullData(name));
  }, []);
  return (
    <>
      <Header />
      <div className="detailsPage">
        <div className="blur">
          <h1>{state.rank}</h1>
          <h1>{state.name}</h1>
          <h3>{state.symbol}</h3>
          <h3>{state.priceUsd}</h3>
          <div className="flex">
            <h3 className="grid-left">Change(24hr) :</h3>
            <h3>{state.changePercent24Hr}</h3>
          </div>
          <div className="flex">
            <h3 className="grid-left">Market cap :</h3>
            <h3>{state.marketCapUsd}</h3>
          </div>
          <div className="flex">
            <h3 className="grid-left"> Supply :</h3>
            <h3>{state.supply}</h3>
          </div>
          <div className="flex">
            <h3 className="grid-left">Volume(24hr) :</h3>
            <h3>{state.volumeUsd24Hr}</h3>
          </div>
          <div className="flex">
            <h3 className="grid-left">VWAP(24hr) :</h3>
            <h3>{state.vwap24Hr}</h3>
          </div>
          <a href={state.explorer} className="a">
            Explorer
          </a>
        </div>
      </div>
      <footer>
        <b> CODE BY MARVELLOUS</b>
      </footer>
    </>
  );
}
export default DetailsPage;
