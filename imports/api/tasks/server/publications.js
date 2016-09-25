import { Tasks }  from '../tasks.js';
import { Meteor } from 'meteor/meteor';

// this code will only run on server
// here, We publish tasks collection to the client
Meteor.publish('tasks', function tasksPublication() {
  return Tasks.find();
})
