import Ember from 'ember';
import layout from '../templates/components/em-phone-input';

const { Component, isPresent, computed, defineProperty } = Ember;

export default Component.extend({
  layout,
  type: 'text',
  disabled: false,
  classNames: ['input-field'],
  _wasBlurred: false,

  id: computed('elementId', function() {
    return `input-${this.get('elementId')}`;
  }),

  init() {
    this._super(...arguments);
    let attrs = this.get('attrs');
    if (attrs.model && attrs.path) {
      defineProperty(this, 'validation', computed.oneWay(`model.validations.attrs.${attrs.path}`));
      defineProperty(this, 'value', computed.alias(`model.${attrs.path}`));
    }
  },

  didInsertElement() {
    this._super(...arguments);
    const $label = this.$('> label');
    if (isPresent(this.get('value')) && !$label.hasClass('active')) {
        $label.addClass('active');
    }
    if (this.get('attrs').icon) {
        this.$('.em-input-error').css('margin-left', '3rem');
    }
  },
  actions: {
    'on-focus-out'() {
      if (!this.get('_wasBlurred')) {
        this.set('_wasBlurred', true);
      }
    }
  }
});
