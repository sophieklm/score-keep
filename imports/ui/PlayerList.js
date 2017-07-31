import React from 'react';
import PropTypes from 'prop-types';
import {Players} from './../api/players';
import Player from './Player';

export default class PlayerList extends React.Component {
  renderPlayers() {
    let numbers = [{val: 1}, {val: 2}];
    return this.props.players.map((player) => {
      return <Player key={player._id} player={player}/>;
    });
  }
  render() {
    return (
      <div>
        {this.renderPlayers()}
      </div>
    );
  }
}
