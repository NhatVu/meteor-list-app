import React from 'react';
import TaskList from '../containers/TaskList.jsx';
import PostTask from '../containers/PostTask.jsx';

export default class App extends React.Component {
  constructor(props){
    super(props);

  }
render(){

    return(
      <div className="container">
        <h1>Todos</h1>
        <PostTask/>
        <TaskList/>
      </div>
    )
  }
}
