import React from 'react'
import ReactDOM from 'react-dom'
import App from './ClientApp'
import { match } from 'react-router'

match({
  history: App.History,
  routes: App.Routes
}, (err, redirectLocation, renderProps) => {
  if (err) return console.error('browser entry error')
  ReactDOM.render(<App {...renderProps} />, document.getElementById('app'))
})

