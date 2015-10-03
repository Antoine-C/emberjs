import Ember from 'ember';

export function setGender(params) {
  return params[0] == 'female' ? 'her' : 'his';
}

export default Ember.Helper.helper(setGender);
