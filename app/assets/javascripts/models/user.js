App.User = DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),

  projects: DS.hasMany('project', {async: true})
});
