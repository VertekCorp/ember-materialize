import Ember from 'ember';
import layout from '../templates/components/em-select';

export default Ember.Component.extend({
  layout,
  classNames: ['input-field'],
  prompt: 'Select...',
  selectionChanged: Ember.observer('value', function() {
    let value = this.get('value');
    Ember.$.each(this.$('option'), function(name, option) {
      if (option.value === value) {
        Ember.$(option).prop('selected', true);
      } else {
        Ember.$(option).prop('selected', false);
      }
    });
    this.$('select').material_select();
  }),
  didInsertElement() {
    this._super(...arguments);

    let value = this.get('value');
    Ember.$.each(this.$('option'), function(name, option) {
      if (option.value === value) {
        Ember.$(option).prop('selected', true);
      }
    });
    this.$('select').material_select();
  },
  willDestroyElement() {
    this._super(...arguments);
    this.$('select').material_select('destroy');
  },
  actions: {
    'on-change'(e) {
      this.set('selection', this.get('content').findBy(this.get('optionValuePath'), e));
    }
  }
});
