Ember.Handlebars.registerBoundHelper('simple-format', function(string) {
  Ember.assert("You must supply an argument of data to be formatted", arguments.length < 3);

  if (Ember.isNone(string)) {
    return;
  }

  var paragraphs = string.split(/\n{2,}/),
      div = document.createElement('div');

  paragraphs.forEach(function(paragraph) {
    var p = document.createElement('p'),
        lines = paragraph.split(/\n/);

    div.appendChild(p);

    lines.forEach(function(line, i) {
      var text = document.createTextNode(line);

      if (i > 0) {
        p.appendChild(document.createElement('br'));
      }
      p.appendChild(text);
    });
  });

  return Ember.String.htmlSafe(div.innerHTML);
});
