import React from 'react';
import ReactDOM from 'react-dom';

export default class TaskItem extends React.Component {


    render() {
        return (
            <li>
                <button className="delete">
                    &times;
                </button>

                <input type="checkbox" readOnly/>
                {this.props.text}
            </li>
        )
    }
}

TaskItem.propTypes = {
    text: React.PropTypes.string.isRequired
}
