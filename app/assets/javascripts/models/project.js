App.Project = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  tags: DS.attr('array'),
  apiToken: DS.attr(),

  statuses: DS.hasMany('status', {async: true}),

  tagList: function() {
    var tags = this.get('tags'),
        project = this;

    return tags.map(function(tag, index) {
      return App.Tag.create({
        index: index,
        project: project
      })
    });
  }.property()
});
