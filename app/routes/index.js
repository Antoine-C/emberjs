import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        var self = this;
        return this.store.filter('dribbles', {isNew: true}, function(dribbles) {
          return dribbles.get('isNew');
        });
    }
});
