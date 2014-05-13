App.Route = Ember.Route.extend({
  checkAuthentication: function(transition) {
    var authController = this.controllerFor('auth');

    if (authController.get('isLoggedOut')) {
      authController.set('lastTransition', transition);
      this.transitionTo('login');
    }
  },

  checkUnauthenticated: function() {
    var authController = this.controllerFor('auth');

    if (authController.get('isLoggedIn')) {
      lastTransition = authController.get('lastTransition');
      if (lastTransition) {
        authController.set('lastTransition', null);
        lastTransition.retry();
      } else {
        this.transitionToRoot();
      }
    }
  },

  transitionToRoot: function() {
    this.transitionTo('application');
  }
});
