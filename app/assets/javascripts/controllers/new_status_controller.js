App.NewStatusController = Ember.ObjectController.extend({
  actions: {
    reset: function() {
      this.setProperties({
        title: null,
        description: null,
        startAt: null,
        finishAt: null,
        tag: null
      });
    },

    create: function() {
      var status = this.getProperties('title', 'description', 'startAt', 'finishAt', 'tag');

      if (status.title) {
        this.send('newStatus', status);
        this.send('reset');
      }
    }
  },

  title: null,
  description: null,
  startAt: function(name, value) {
    return value || new Date();
  }.property(),
  finishAt: null,
  tag: null,

  titleDidChange: function() {
    var title = this.get('title');

    if (!title) {
      this.send('reset');
    }
  }.observes('title')
});
