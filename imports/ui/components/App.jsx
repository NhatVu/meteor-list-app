import React from 'react';
import PlayerList from '../containers/PlayerList.jsx'

export default class App extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    const list = [
      {_id: 1, name: 'name1', score: 1 },
      {_id: 2, name: 'name2', score: 2 },
      {_id: 3, name: 'name3', score: 3 },
      {_id: 4, name: 'name4', score: 4 },
    ]
    return(
      <div>
        <h1>leaderboard</h1>
        <PlayerList playerList={list} />
      </div>
    )
  }
}
