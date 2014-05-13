App.StatusesController = Ember.ArrayController.extend({
  actions: {
    selectStatus: function(status) {
      var id = status && status.get('id');
      this.set('selected', id);
    }
  },

  queryParams: ['to', 'from', 'selected'],

  sortProperties: ['startAt'],
  sortAscending: false,

  to: null,
  from: null,
  selected: null,

  selectedObject: function() {
    var selected = this.get('selected'),
        content = this.get('content');

    return content.findProperty('id', selected);
  }.property('selected', 'content.[]'),

  filteredContent: function() {
    var content = this.get('content'),
        to = this.get('to'),
        from = this.get('from');

    if (to || from) {
      return content.filter(function(status) {
        var startAt = status.get('startAt'),
            finishAt = status.get('finishAt') || startAt;

        return (!from || finishAt >= from) && (!to || startAt <= to);
      });
    } else {
      return content;
    }
  }.property('content.@each', 'to', 'from')
});
