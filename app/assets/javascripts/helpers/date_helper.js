Ember.Handlebars.helper('date', function() {
  Ember.assert("moment.js is missing.", 'moment' in window);
  Ember.assert("You must supply a date object or string", arguments.length > 1);

  var args = [].slice.call(arguments),
      options = args.pop(),
      date = args.shift(),
      fmt = args.shift();

  return moment(date).format(fmt);
});
