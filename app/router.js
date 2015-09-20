import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.resource('users', function() {
        this.resource('dribbles', {path: 'dribbles'}, function() {
            this.route('dribble');
        });
    });
    this.route('dribbles');
});

export default Router;
