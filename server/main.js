import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(function () {
  let obj = {
    name: "Sophie",
    printName() {
      console.log(`Name: ${this.name}`);
    }
  };
  setTimeout(obj.printName.bind(obj), 1000);
});
