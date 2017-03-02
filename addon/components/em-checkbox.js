import Ember from 'ember';
import layout from '../templates/components/em-checkbox';
const { Component, computed, observer } = Ember;

export default Component.extend({
  layout,
  id: computed('elementId', function() {
    return `${this.get('elementId')}-checkbox`;
  }),

  checkedDidChange: observer('checked', function() {
    this.sendAction('on-checked-changed', this.get('checked'), this.get('value'));
  })

});
