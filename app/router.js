import EmberRouter from '@ember/routing/router';
import config from 'heka-client/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('tools', function () {
    this.route('ding');
  });
});
