import React from 'react';
import TaskList from '../containers/TaskList.jsx'

export default class App extends React.Component {
  constructor(props){
    super(props);

  }
render(){
    const list = [
      {_id: 1, text: 'text1' },
      {_id: 2, text: 'text2' },
      {_id: 3, text: 'text3' },
      {_id: 4, text: 'text4' },
    ]
    return(
      <div>
        <h1>Todos</h1>
        <TaskList taskList={list} />
      </div>
    )
  }
}
