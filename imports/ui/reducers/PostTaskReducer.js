export default function reducer(state=null, action) {
    switch (action.type) {
      case "INSERT_TASK_ERROR": {
        return {...state, ...action.payload}
      }
    }
    return state;
}
