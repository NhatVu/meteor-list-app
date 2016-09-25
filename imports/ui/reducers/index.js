import { combineReducers } from "redux"

import postTask from "./PostTaskReducer";
import tasks  from './Tasks.js'

export default combineReducers({
  postTask,
  tasks,
})
