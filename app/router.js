import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('instrument-list');
  this.route('continent-list');
  this.route('region-list', function(){
    this.route('region')
  });
  this.route('region');
  this.route('places-list');
});

export default Router;
