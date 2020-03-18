import React from 'react';
import { render, hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'

import { Frontload } from 'react-frontload';
import Loadable from 'react-loadable';

import store from './store';

import App from './App';

const Application = (
    <Provider store={store}>
        <BrowserRouter>
            <Frontload>
                <App />
            </Frontload>
        </BrowserRouter>        
    </Provider>
);

const root = document.querySelector('#root');

if (root.hasChildNodes() === true) {
  Loadable.preloadReady().then(() => {
    hydrate(Application, root);
  });
} else {
  render(Application, root);
}
