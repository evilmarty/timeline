App.StatusListView = Ember.CollectionView.extend({
  tagName: 'ol',

  itemTagName: 'li',
  itemViewClass: Ember.View.extend({
    templateName: 'statuses/item',

    classNameBindings: ['hasMouseOver:hover', 'isSelected:active'],

    hasMouseOverBinding: 'content.hasMouseOver',
    selectedBinding: 'parentView.selected',

    isSelected: function() {
      var selected = this.get('selected'),
          content = this.get('content');
      return selected === content;
    }.property('selected'),

    select: function() {
      var content = this.get('content');
      this.set('selected', content);
    },

    click: function() {
      this.select();
    },

    keyPress: function(e) {
      if (e.keyCode === 13) { // Enter
        this.select();
      }
    },

    mouseEnter: function() {
      this.set('hasMouseOver', true);
    },

    mouseLeave: function() {
      this.set('hasMouseOver', false);
    }
  }),

  attributeBindings: ['tabindex'],

  tabindex: 0,
  selected: null,

  selectedIndex: function(name, value) {
    var content = this.get('content'), selected;

    if (arguments.length === 2) {
      selected = content.objectAt(value);
      this.set('selected', selected);
    } else {
      selected = this.get('selected');
    }

    return content.indexOf(selected);
  }.property('selected', 'content.[]'),

  selectNext: function() {
    var selectedIndex = this.get('selectedIndex');
    this.set('selectedIndex', selectedIndex + 1);
  },

  selectPrevious: function() {
    var selectedIndex = this.get('selectedIndex');
    this.set('selectedIndex', selectedIndex - 1);
  },

  keyDown: function(e) {
    switch (e.keyCode) {
    case 40: // Down
      this.selectNext();
      e.preventDefault();
      break;
    case 38: // Up
      this.selectPrevious();
      e.preventDefault();
      break;
    }
  }
});
