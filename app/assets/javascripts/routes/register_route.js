App.RegisterRoute = App.Route.extend({
  actions: {
    register: function() {
      var route = this;

      this.controllerFor('auth').create(this.currentModel).then(function() {
        route.refresh();
      });
    }
  },

  beforeModel: function() {
    this.checkUnauthenticated()
  },

  model: function() {
    return {};
  }
});
