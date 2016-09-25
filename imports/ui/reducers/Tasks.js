// Meteor.subscribe('tasks');

export default function tasks(state={tasks: []}, action){
  switch (action.type) {
    case 'SET_TASKS':
      return {...state, tasks: action.payload.tasks}
    default:
      return state;
  }
}
