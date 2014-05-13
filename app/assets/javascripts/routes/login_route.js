App.LoginRoute = App.Route.extend({
  actions: {
    authenticate: function() {
      var currentModel = this.currentModel,
          credentials = currentModel.getProperties('email', 'password'),
          route = this;

      currentModel.setProperties({
        error: null,
        isAuthenticating: true
      });

      this.controllerFor('auth').login(credentials).then(function(data) {
        Ember.run.later(route, 'refresh', 300);
      }, function(data) {
        currentModel.setProperties({
          email: null,
          password: null,
          error: data.error
        });
      }).finally(function() {
        currentModel.set('isAuthenticating', false);
      });
    }
  },

  beforeModel: function() {
    this.checkUnauthenticated();
  },

  model: function() {
    return Ember.Object.create({
      email: null,
      password: null,
      error: null,
      isAuthenticating: false
    });
  }
});
