import React from 'react';
import ReactDOM from 'react-dom';

export default class Player extends React.Component {
  render(){
    return (
      <li>{this.props.name}: {this.props.score}</li>
    )
  }
}

  Player.propTypes = {
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired
  }
