App.DateTimeField = Ember.Component.extend(Ember.TextSupport, {
  classNames: ['ember-text-field'],
  tagName: 'input',
  attributeBindings: ['type', 'size', 'name', 'step'],

  value: null,

  type: 'datetime-local',
  size: null,
  min: null,
  max: null,
  step: null,

  _elementValueDidChange: function() {
    var element = this.get('element'),
        value = element.value,
        date = new Date(value);

    if (!isNaN(date)) {
      this.set('value', date); 
    }
  },

  valueDidChange: function() {
    var element = this.get('element'),
        value = this.get('value');

    element.value = this._format(value);
  }.observes('value').on('didInsertElement'),

  minDidChange: function() {
    var min = this.get('min'),
        element = this.get('element');

    element.min = this._format(min);
  }.observes('min'),

  maxDidChange: function() {
    var max = this.get('max'),
        element = this.get('element');

    element.max = this._format(max);
  }.observes('max'),

  _format: function(date) {
    function pad(n) {
      return (n > 9 ? '' : '0') + n;
    }

    if (date) {
      return [
        date.getUTCFullYear(), '-',
        pad(date.getUTCMonth() + 1), '-',
        pad(date.getUTCDate()), 'T',
        pad(date.getUTCHours()), ':',
        pad(date.getUTCMinutes())
      ].join('');
    } else {
      return null;
    }
  }
});

Ember.Handlebars.helper('datetime-input', App.DateTimeField);
