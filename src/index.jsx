import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import './styles/style.css';
import { Provider } from 'react-redux';
import store from './states';

const root = createRoot(document.getElementById('root'));

// TODO: wrap App with store provider
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </Provider>,
);
