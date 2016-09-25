import { Meteor } from 'meteor/meteor';

export function insertTask(text) {
  return dispatch => {
    Meteor.call('tasks.insert', text, (err, result)=>{
      if(err){
        dispatch({
          type: "INSERT_TASK_ERROR",
          payload: {
            text: err
          }
        })
      }
    })

  }
}

// export function fetchTasks() {
//   return dispatch => {
//     Meteor.call('tasks.fetch')
//   }
// }
