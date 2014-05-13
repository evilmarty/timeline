App.ApplicationRoute = App.Route.extend({
  actions: {
    logout: function() {
      this.controllerFor('auth').logout();
      this.refresh();
    }
  },

  model: function() {
    var authController = this.controllerFor('auth');

    // Ensure we always resolve the promise, even when no user is loaded.
    return new Ember.RSVP.Promise(function(resolve, reject) {
      authController.load().then(function(user) {
        resolve(user);
      }, function() {
        resolve();
      });
    });
  },

  setupController: function(controller, context) {
    controller.set('model', context);
  }
});
