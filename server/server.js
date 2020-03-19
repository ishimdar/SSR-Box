import path from 'path'
import fs from 'fs'

import store from '../src/store';

import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server';

import { createStore } from 'redux'
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Frontload, frontloadServerRender } from 'react-frontload';
import Loadable from 'react-loadable';

import rootReducer from '../src/store/reducers';

import App from '../src/App'

const PORT = 8080
const app = express()

const router = express.Router()

app.use(express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' }));

const serverRenderer = (req, res, next) => {

  const context = {};
  const module = [];


  let preloadedState = { };

  const indexFile = path.resolve('./build/index.html');

  fs.readFile(indexFile, 'utf8', (err, data) => {    
    if (err) {
      console.error(err)
      return res.status(500).send('An error occurred')
    }
    
    frontloadServerRender(() => {
      return renderToString(    
        <Loadable.Capture report={m => module.push(m)}>
          <Provider store={store}>
            <StaticRouter location={req.url} context={context}>
              <Frontload isServer>
                <App />
              </Frontload>
            </StaticRouter>
          </Provider>
        </Loadable.Capture> 
      )
    }).then(htmlMarkup => {
      const store = createStore(rootReducer, preloadedState);

      const finalState = store.getState(); 

      // console.log('htmlMarkup', htmlMarkup);

      return res.send(
        data.replace(
          `<div id="root"></div>`,
          `<div id="root">${
            htmlMarkup
          }</div> <script>          
          window.__PRELOADED_STATE__ = ${JSON.stringify(finalState).replace(
            /</g,
            '\\u003c'
          )}
        </script>`
          
        )      
      ) 
    })
  })
}

router.use('/', serverRenderer)


// tell the app to use the above rules
app.use(router)

// app.use(express.static('./build'))
app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`)
})