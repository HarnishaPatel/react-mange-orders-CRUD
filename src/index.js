import React, { Fragment } from 'react'
import { render } from 'react-dom'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import { createStore , applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


import NavBar from './NavBar'
import Instructions from './Instructions'
import Wireframe from './Wireframe'
import Requests from './Requests'
import reducer from './Reducers/requested_orders';

/*
* Implemented redux and react-redux binding for better state management 
* used middlewear thunk to deal with async behaviour of application  
*/ 

//create store to handle state
const store = createStore(
  (reducer),
  applyMiddleware(thunk)
);

const ProgrammerTest = () => (
  <BrowserRouter>
  {/* pass store as a props */}
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
