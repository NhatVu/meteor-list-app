import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
// import { publishAllTask } from './publications.js';
// import { publishAllTask } from './server/publications.js';

export const Tasks = new Mongo.Collection('tasks');

// publishAllTask();
// if(Meteor.isServer) {
//   // this code will only run on server
//   // here, We publish tasks collection to the client
//   Meteor.publish('tasks', function tasksPublication() {
//     return Tasks.find();
//   })
// }
