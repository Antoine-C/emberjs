import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('dribbles');
    this.route('dribble', {path: '/dribble/:dribble_id'});

    this.route('users');
    this.route('user', {path: '/user/:user_id'}, function() {
      this.route('dribbles');
    });
});

export default Router;
