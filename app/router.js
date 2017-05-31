import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('labels', function() {
    this.route('new', { path: '/new'});
  });
  this.route("artists", function() {
    this.route('new', { path: '/new'});
  });
});

export default Router;
