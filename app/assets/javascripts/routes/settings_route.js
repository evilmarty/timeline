App.SettingsRoute = App.Route.extend({
  actions: {
    save: function() {
      var route = this;

      this.controllerFor('auth').update(this.currentModel).then(function() {
        route.refresh();
      });
    },

    cancel: function() {
      this.transitionToRoot();
    }
  },

  beforeModel: function(transition) {
    this.checkAuthentication(transition);
  },

  model: function() {
    return this.modelFor('application').toJSON();
  }
});
