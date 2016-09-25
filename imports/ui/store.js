import { applyMiddleware, createStore } from "redux";
import { Tracker } from 'meteor/tracker';
import { Tasks } from '/imports/api/tasks/tasks.js';

import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import reducer from "./reducers"

const middleware = applyMiddleware(promise(), thunk, logger())

const store = createStore(reducer, middleware)
export default store;

// Meteor.subscribe('tasks');

Tracker.autorun(() => {
  Meteor.subscribe('tasks');
  store.dispatch({
    type: 'SET_TASKS',
    payload:{
      tasks: Tasks.find().fetch(), // Tai sao lai la Tasks.Tasks ???
      // tasks: [{_id:1, text: 'a'}, {_id:2, text: 'b'}]
    }
  })
})
