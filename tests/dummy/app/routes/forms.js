import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.A([
            { value: 'Option 1' },
            { value: 'Option 2' },
            { value: 'Option 3' },
            { value: 'Option 4' }
        ]);
    },

    setupController(controller, model) {
        controller.set('selectOptions', model);
    }
});
