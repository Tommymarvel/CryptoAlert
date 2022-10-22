import React from 'react';
import Renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/configure';
import CoinList from '../__mock__/coinList';

describe('CoinList', () => {
  it('renders correctly', () => {
    const tree = Renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <CoinList />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
