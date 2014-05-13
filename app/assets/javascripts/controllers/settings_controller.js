App.SettingsController = Ember.ObjectController.extend({
  accessToken: Ember.computed.oneWay('session.accessToken')
});
