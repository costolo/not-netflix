import React from 'react'
import Layout from './Layout'
import { Router, browserHistory } from 'react-router'
import { store } from './Store'
import { Provider } from 'react-redux'

if (typeof module !== 'undefined' && module.require) {
  if (typeof require.ensure === 'undefined') {
    require.ensure = require('node-ensure') // shim for node.js
  }
}

const rootRoute = {
  component: Layout,
  path: '/',
  indexRoute: {
    getComponent (location, cb) {
      require.ensure([], (err) => {
        console.error('require.ensure error', err)
        cb(null, require('./Landing').default)
      })
    }
  },
  childRoutes: [
    {
      path: 'search',
      getComponent (location, cb) {
        require.ensure([], (err) => {
          console.error('require.ensure error', err)
          cb(null, require('./Search').default)
        })
      }
    },
    {
      path: 'details/:id',
      getComponent (location, cb) {
        require.ensure([], (err) => {
          console.error('require.ensure error', err)
          cb(null, require('./Details').default)
        })
      }
    }
  ]
}

const App = () => (
  <Provider store={store}>
    <Router history={browserHistory} routes={rootRoute} />
  </Provider>
)

App.Routes = rootRoute
App.History = browserHistory

module.exports = App
