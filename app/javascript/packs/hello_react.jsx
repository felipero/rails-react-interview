// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'

import Categories from './components/Categories'
import Category from './components/Category'

const App = props => (
  <Router>
    <Switch>
      <Route exact path="/" component={Categories}/>
      <Route path="/category/:id" component={Category}/>
      <Route component={Categories}/>
    </Switch>
  </Router>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App/>,
    document.body.appendChild(document.createElement('div')),
  )
})
