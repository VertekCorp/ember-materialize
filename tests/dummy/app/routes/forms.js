import Ember from 'ember';
const { Route, A } = Ember;

const SELECT_OPTIONS = A([
    { value: 'Option 1' },
    { value: 'Option 2' },
    { value: 'Option 3' },
    { value: 'Option 4' }
]);

export default Route.extend({
    model() {
      return SELECT_OPTIONS;
    },

    setupController(controller, model) {
        controller.set('selectOptions', model);
        controller.set('selectedOption', null);
        controller.set('selectedObject', null);
        controller.set('preSelectedOption', SELECT_OPTIONS[1].value);
    }
});
