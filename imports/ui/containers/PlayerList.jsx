import React from 'react';
import ReactDOM from 'react-dom';
import Player from '../components/PlayerItem.jsx'

export default class PlayerList extends React.Component {
  constructor(props){
    super(props);

  }

  renderPlayerList(){
    return this.props.playerList.map((player) => {
      return (<Player key={player._id} name={player.name} score={player.score}/>)
    });
  }

  render(){
    return(
      <ul>
        {this.renderPlayerList()}
      </ul>
    )
  }
}

  PlayerList.propTypes = {
    playerList: React.PropTypes.array.isRequired,
  }
