App.Status = DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  startAt: DS.attr('date'),
  finishAt: DS.attr('date'),
  tagId: DS.attr(),

  project: DS.belongsTo('project'),

  tag: function(key, value) {
    var tagId, tagList;

    if (arguments.length === 2) {
      tagId = value ? value.get('id') : null;
      this.set('tagId', tagId);
    } else {
      tagId = this.get('tagId');
      tagList = this.get('project.tagList');
      value = tagList.findProperty('id', tagId);
    }

    return value;
  }.property('tagId', 'project.tagList.[]'),

  tagClassName: function() {
    var tagId = this.get('tagId');
    return tagId ? 'tag-' + tagId : 'no-tag';
  }.property('tagId')
});
