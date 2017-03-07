import Ember from 'ember';
import layout from '../templates/components/em-input';
const { Component, isPresent, computed } = Ember;

export default Component.extend({
  layout,
  type: 'text',
  disabled: false,
  classNames: ['input-field'],
  _wasBlurred: false,
  id: computed('elementId', function() {
    return `input-${this.get('elementId')}`;
  }),
  didInsertElement() {
    this._super(...arguments);
    const $label = this.$('> label');
    if (isPresent(this.get('value')) && !$label.hasClass('active')) {
        $label.addClass('active');
    }
  },

  actions: {
    'on-focus-out'() {
      console.log('heard focus out :)');
      if (!this.get('_wasBlurred')) {
        this.set('_wasBlurred', true);
      }
    }
  }
});
