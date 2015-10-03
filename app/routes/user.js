import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var store = this.store,
        user_id = parseInt(params.user_id);
    return Ember.RSVP.hash({
      user: store.find('user', user_id),
      dribbles: store.find('dribbles', {user: user_id})
    });
  },
  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('user', model.user);
    controller.set('dribbles', model.dribbles);
  }
});
