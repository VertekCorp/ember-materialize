import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    doit(checked, value) {
      console.log('on-checked-change(checked, value): ', checked, value);
    }
  }
});
