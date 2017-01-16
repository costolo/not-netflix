import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Search from './Search'
import Landing from './Landing'
import Layout from './Layout'
import Details from './Details'
import { store } from './Store'
import { Provider } from 'react-redux'

const Routes = () => (
  <Route path='/' component={Layout}>
    <IndexRoute component={Landing} />
    <Route path='/search' component={Search} />
    <Route path='/details/:id' component={Details} />
  </Route>
)

const App = () => (
  <Provider store={store}>
    <Router history={browserHistory} routes={Routes()} />
  </Provider>
)

App.Routes = Routes

module.exports = App
