import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check'

export cosnt PlayerList = new Mongo.Collection('players');
