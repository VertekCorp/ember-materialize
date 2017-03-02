import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    doit(arg, arg2) {
      console.log('heard doit with: ' + arg, arg2);
    }
  }
});
