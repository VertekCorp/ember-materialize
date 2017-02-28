import Ember from 'ember';
import layout from '../templates/components/em-collapsible';

export default Ember.Component.extend({
  layout,
  tagName: 'ul',
  classNames: ['collapsible'],
  attributeBindings: ['data-collapsible'],
  'data-collapsible': 'accordion',

  didInsertElement() {
    this._super(...arguments);
    this.$().collapsible();
  }
});
