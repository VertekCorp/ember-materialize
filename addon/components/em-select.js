import Ember from 'ember';
import layout from '../templates/components/em-select';

export default Ember.Component.extend({
    layout,
    classNames: ['input-field'],
    didInsertElement() {
        this._super(...arguments);
        this.$('select').material_select();
    },
    willDestroyElement() {
        this._super(...arguments);
        this.$('select').material_select('destroy');
    }
});
