import { check } from 'meteor/check';
import { Tasks } from './tasks.js';
Meteor.methods({
    'tasks.insert' (text) {
        check(text, String);

        // Make sure the user is logged in before inserting a task
        // if (!this.userId) {
        //     throw new Meteor.Error('not-authorized');
        // }

        Tasks.insert({
            text,
            createdAt: new Date(),
            // owner: this.userId,
            // username: Meteor.users.findOne(this.userId).username,
        });
    },

    'tasks.remove' (taskId) {
        check(taskId, String);

        const task = Tasks.findOne(taskId);
        // if (task.owner !== this.userId) {
        //   // If the task is private, make sure only the owner can delete it
        //   alert("You don't have permession to delete this task");
        //   throw new Meteor.Error('not-authorized');
        // }
        Tasks.remove(taskId);
    },

    'tasks.setChecked' (taskId, setChecked) {
        check(taskId, String);
        check(setChecked, Boolean);

        const task = Tasks.findOne(taskId);
        if (task.private && task.owner !== this.userId) {
            // If the task is private, make sure only the owner can delete it
            throw new Meteor.Error('not-authorized');
        }
        Tasks.update(taskId, {
            $set: {
                checked: setChecked
            }
        });
    },
    'tasks.setPrivate' (taskId, setToPrivate) {
        check(taskId, String);
        check(setToPrivate, Boolean);

        const task = Tasks.findOne(taskId);

        // Make sure only the task owner can make a task private
        if (task.owner !== this.userId) {
            throw new Meteor.Error('not-authorized');
        }

        Tasks.update(taskId, {
            $set: {
                private: setToPrivate
            }
        });
    },
});
