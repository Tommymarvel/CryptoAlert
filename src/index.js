import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/configure';
import DetailsPage from './component/DetailsPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route index path="/" element={<App />} />
          <Route index path="/details:name" element={<DetailsPage />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
);
