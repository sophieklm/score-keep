import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {Players} from './../api/players';

export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = { increment: 1 };
  }
  getIncrement(event) {
    if (event.target.value !== '') {
      this.setState({increment: event.target.value});
    } else {
      this.setState({increment: 1});
    }
  }
  render() {
    let itemClassName= `item item--position-${this.props.player.rank}`;
    return (
      <div className={itemClassName} key={this.props.player._id}>
        <div className="player">
          <div>
            <h3 className="player__name">{this.props.player.name}</h3>
            <p className="player__stats">
              {this.props.player.position} {this.props.player.score} point(s)
            </p>
          </div>
          <div className="player__actions">
            <input className="increment" type="number" name="increment" onChange={this.getIncrement.bind(this)} placeholder="Increment"/>
            <button className="button button--round" onClick={() => {
              Players.update(this.props.player._id, {
                $inc: {score: -parseInt(this.state.increment)}
              });
            }}>-</button>
            <button className="button button--round" onClick={() => {
              Players.update(this.props.player._id, {
                $inc: {score: parseInt(this.state.increment)}
              });
            }}>+</button>
            <button className="button button--round" onClick={() => Players.remove(this.props.player._id)}>X</button>
          </div>
        </div>
      </div >
    );
  }
}

Player.propTypes = {
  player: PropTypes.object.isRequired,
  increment: PropTypes.object
};
