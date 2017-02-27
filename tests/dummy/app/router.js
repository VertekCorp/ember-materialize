import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
    this.route('forms');
    this.route('cards');
    this.route('collapsibles');
    this.route('copyright');
});

export default Router;
