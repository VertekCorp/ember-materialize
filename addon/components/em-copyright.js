import Ember from 'ember';
import layout from '../templates/components/em-copyright';
const { computed } = Ember;

export default Ember.Component.extend({
    layout,
    tagName: 'span',
    date: computed(function() {
        const currentYear = new Date().getFullYear();
        const startYear = this.get('startYear');

        if (startYear === null || startYear === currentYear) {
            return `${currentYear}`;
        } else {
            return `${startYear}-${currentYear}`;
        }
    })
});
