import React from 'react';
import ReactDOM from 'react-dom';
import TaskItem from '../components/TaskItem.jsx'

export default class TaskList extends React.Component {
  constructor(props){
    super(props);

  }

  renderTaskList(){
    return this.props.taskList.map((task, index) => {
      return (<TaskItem key={task._id} text={task.text}/>)
    });
  }

  render(){
    return(
      <ul>
        {this.renderTaskList()}
      </ul>
    )
  }
}

  TaskList.propTypes = {
    taskList: React.PropTypes.array.isRequired,
  }
