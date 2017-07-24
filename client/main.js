import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players} from './../imports/api/players';

const renderPlayers = function (playersList) {
  let numbers = [{val: 1}, {val: 2}];
  return playersList.map(function (player){
    return <p key={player._id}>{player.name} has {player.score} point(s).</p>;
  });
};

Meteor.startup(function () {
  Tracker.autorun(function() {
    let players = Players.find().fetch();
    let title = "Score Keep";
    let name = "Sophie";
    let jsx = (
      <div>
        <h1>{title}</h1>
        <p id="my-p">Hello {name}!</p>
        {renderPlayers(players)}
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });
});
