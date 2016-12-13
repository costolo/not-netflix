import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
// components
import Search from './Search'
import Landing from './Landing'
import Layout from './Layout'
import Details from './Details'
import { store } from './Store'
import { Provider } from 'react-redux'

const App = () => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component={Landing} />
        <Route path='/search' component={Search} />
        <Route path='/details/:id' component={Details} />
      </Route>
    </Router>
  </Provider>
)

export default App
