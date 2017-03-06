import Ember from 'ember';
import layout from '../templates/components/em-select';

export default Ember.Component.extend({
  layout,
  classNames: ['input-field'],
  prompt: 'Select...',
  didInsertElement() {
    this._super(...arguments);

    let value = this.get('value');
    Ember.$.each(this.$('option'), function(name, option) {
      if (option.value === value) {
        Ember.$(option).attr('selected', 'selected');
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
      this.set('value', e);
      this.set('selection', this.get('content').findBy(this.get('optionValuePath'), e));
    }
  }
});
