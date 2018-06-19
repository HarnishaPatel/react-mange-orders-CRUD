import React, { Fragment } from 'react'
import { render } from 'react-dom'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import { createStore , applyMiddleware } from 'redux';
import reducer from './Reducers/requested_orders';
import {Provider } from 'react-redux';
import thunk from 'redux-thunk';


import NavBar from './NavBar'
import Instructions from './Instructions'
import Wireframe from './Wireframe'
import Requests from './Requests'

const store = createStore(
  (reducer),
  applyMiddleware(thunk)
);

const ProgrammerTest = () => (
  <BrowserRouter>
  <Provider store={store} >
    <Fragment>
      <NavBar />
      <Switch> 
        <Route 
          path="/requests" 
          component={Requests} 
          exact 
        /> 
        <Route
          path="/wireframe"
          component={Wireframe}
          exact
        />
        <Route component={Instructions} />
      </Switch>
    </Fragment>
    </Provider>
  </BrowserRouter>
)

render(<ProgrammerTest />, document.getElementById('root'))
