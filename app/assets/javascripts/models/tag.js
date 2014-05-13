App.Tag = Ember.Object.extend({
  index: null,
  project: null,

  id: function() {
    var index = this.get('index');
    if (!Ember.isNone(index)) {
      return index + 1;
    }
  }.property('index'),

  name: function(key, value) {
    var index = this.get('index'),
        tags = this.get('project.tags');

    if (arguments.length === 2) {
      tags = tags.slice();
      tags[index] = value;
      this.set('project.tags', tags);
    } else {
      value = tags[index];
    }

    return value;
  }.property('index', 'project.tags')
});
