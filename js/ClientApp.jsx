const React = require('react')
const ReactDOM = require('react-dom')
const { Router, Route, hashHistory, IndexRoute } = require('react-router')

// components
const Search = require('./Search')
const Landing = require('./Landing')
const Layout = require('./Layout')
const Details = require('./Details')

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Landing} />
      <Route path='/search' component={Search} />
      <Route path='/details/:id' component={Details} />
    </Route>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
