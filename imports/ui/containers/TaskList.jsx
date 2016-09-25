import React from 'react';
import ReactDOM from 'react-dom';
import TaskItem from '../components/TaskItem.jsx';
import { createContainer } from 'meteor/react-meteor-data';
import { Tasks } from '../../api/tasks/tasks.js';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';

class TaskList extends React.Component {
  constructor(props){
    super(props);

  }
  componentWillMount(){

  }
  renderTaskList(){
    return this.props.tasks.map((task, index) => {
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
    tasks: React.PropTypes.array.isRequired,
  }

  const mapStateToProps = ({tasks}) => {
  return {
    tasks: tasks.tasks,
  }
}

export default connect(mapStateToProps)(TaskList);



  // export default createContainer(() => {
  //   Meteor.subscribe('tasks');
  //   return {
  //     taskList: Tasks.find({}).fetch()
  //   }
  // }, TaskList);
