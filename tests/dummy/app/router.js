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

    this.route('tabs', { path: '/tabs' }, function() {
      this.route('index');
      this.route('tab2');
      this.route('tab3');
    });
});

export default Router;
