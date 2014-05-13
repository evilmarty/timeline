Ember.Handlebars.registerHelper('status-list', function(options) {
  return Ember.Handlebars.helpers.collection.call(this, 'App.StatusListView', options);
});
