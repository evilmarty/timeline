App.Button = Ember.View.extend(Ember.TargetActionSupport, {
  tagName: 'button',

  attributeBindings: ['title', 'disabled', 'type'],

  title: null,
  disabled: false,
  type: 'button',

  target: Ember.computed.alias('controller'),

  click: function() {
    this.triggerAction();
  }
});

Ember.Handlebars.registerHelper('button', function() {
  var args = [].slice.call(arguments),
      options = args.pop(),
      action = args.shift(),
      hash = options.hash;

  if (action) {
    hash.action = action;
  }

  return Ember.Handlebars.helpers.view.call(this, App.Button, options);
});
