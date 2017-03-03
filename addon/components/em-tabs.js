import Ember from 'ember';
import layout from '../templates/components/em-tabs';

export default Ember.Component.extend({
  layout,
  didInsertElement() {
    this._super(...arguments);
    this.$('ul.tabs').tabs();
  }
});
