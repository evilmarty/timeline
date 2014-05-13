App.ApplicationController = Ember.Controller.extend({
  navigationVisible: false,
  model: null,
  content: Ember.computed.alias('model'),

  isLoggedIn: Ember.computed.bool('model'),

  actions: {
    toggleNavigation: function() {
      this.toggleProperty('navigationVisible');
    }
  }
});
