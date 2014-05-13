App.ApplicationView = Ember.View.extend({
  templateName: 'application',

  click: function() {
    var controller = this.get('controller');

    if (controller) {
      controller.set('navigationVisible', false);
    }
  }
});
