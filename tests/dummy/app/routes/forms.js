import Ember from 'ember';
const { Route, A, RSVP } = Ember;

const SELECT_OPTIONS = A([
  { value: 'Option 1' },
  { value: 'Option 2' },
  { value: 'Option 3' },
  { value: 'Option 4' }
]);

export default Route.extend({
  setupController(controller) {
    controller.setProperties({
      person: Ember.Object.create({ name: 'Boba Fett', email: 'bfett@example.com'} ),
      selectOptions: SELECT_OPTIONS,
      selectedOption: null,
      selectedObject: null,
      preSelectedOption: SELECT_OPTIONS[1].value
    });
  }
});
