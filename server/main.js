import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(function () {
  Players.insert({
    name: 'Sophie',
    score: 2
  });
  console.log(Players.find().fetch());
});
