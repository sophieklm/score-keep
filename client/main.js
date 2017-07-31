import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players} from './../imports/api/players';

const renderPlayers = (playersList) => {
  let numbers = [{val: 1}, {val: 2}];
  return playersList.map((player) => {
    return (
      <p key={player._id}>
        {player.name} has {player.score} point(s)
        <button onClick={() => {
          Players.update(player._id, {
            $inc: {score: -1}
          });
        }}>-1</button>
        <button onClick={() => {
          Players.update(player._id, {
            $inc: {score: 1}
          });
        }}>+1</button>
        <button onClick={() => Players.remove(player._id)}>X</button>
      </p>
    );
  });
};

const handleSubmit = (event) => {
  let playerName = event.target.playerName.value;
  event.preventDefault();
  if (playerName) {
    event.target.playerName.value = '';
    Players.insert({
      name: playerName,
      score: 0
    });
  }
};

class TitleBar extends React.Component {
  render() {
    return (
      <div>
        <h1>Score Keep</h1>
      </div>
    );
  }
}

Meteor.startup(() => {
  Tracker.autorun(() =>{
    let players = Players.find().fetch();
    let title = "Score Keep";
    let jsx = (
      <div>
        <TitleBar/>
        {renderPlayers(players)}
        <form onSubmit={handleSubmit}>
          <input type="text" name="playerName" placeholder="Player name"/>
          <button>Add Player</button>
        </form>
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });
});
