import React from 'react';
import { connect } from 'react-redux';
import { insertTask } from '../actions/PostTaskAction.js'

class PostTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newTask : ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.dispatch(insertTask(this.state.newTask));
        this.setState({newTask: ''});
    }

    onInputChange(e){
      this.setState({
        newTask: e.target.value,
      });
    }

    render() {
        return (
            <form className='new-task' onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" ref='postTask' placeholder='create task' value={this.state.newTask}
                onChange={this.onInputChange.bind(this)}/>
            </form>

        )
    }
}

export default connect(null, null)(PostTask);
