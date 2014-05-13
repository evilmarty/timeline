App.TimelineView = Ember.ContainerView.extend({
  classNames: ['timeline'],
  childViews: ['momentsView'],

  template: Ember.Handlebars.compile('{{view.value}}'),

  min: null,
  max: null,
  content: null,
  selected: null,

  minZoom: 60000, // 1 minute
  maxZoom: 31536000000, // 1 year

  maxDidChange: function() {
    var max = this.get('max'),
        min = this.get('min');

    if (!max) {
      max = new Date();
      this.set('max', max);
    }
    if (!min || min > max) {
      min = new Date(max.getTime() - 604800000);
      this.set('min', min);
    }
  }.observes('max').on('init'),

  minDidChange: function() {
    var min = this.get('min');

    if (!min) {
      this.maxDidChange();
    }
  }.observes('min'),

  delta: function(name, delta) {
    var max, min, value;

    if (arguments.length === 2) {
      value = this.get('value');
      max = new Date(value.getTime() + delta);
      min = new Date(value.getTime() - delta);
      this.setProperties({
        max: max,
        min: min
      });
    } else {
      max = new Date(this.get('max')),
      min = new Date(this.get('min'));
      delta = (max.getTime() - min.getTime()) / 2;
    }

    return delta;
  }.property('min', 'max'),

  value: function(name, value) {
    var max = new Date(this.get('max')),
        delta = this.get('delta');

    if (value) {
      this.setProperties({
        max: new Date(value.getTime() + delta),
        min: new Date(value.getTime() - delta)
      });
    } else {
      value = new Date(max.getTime() - delta);
    }

    return value;
  }.property('max', 'delta'),

  momentsView: Ember.CollectionView.extend({
    tagName: 'ol',
    classNames: ['timeline-moments'],

    contentBinding: 'parentView.content',
    selectedBinding: 'parentView.selected',
    valueBinding: 'parentView.value',
    deltaBinding: 'parentView.delta',

    click: function(e) {
      if (e.target === this.get('element')) {
        this.set('selected', null);
      }
    },

    itemViewClass: Ember.View.extend({
      tagName: 'li',
      classNames: ['timeline-moment'],
      classNameBindings: ['tagClassName', 'hasMouseOver:hover', 'isSelected:active'],

      hasMouseOverBinding: 'content.hasMouseOver',

      isSelected: function() {
        var selected = this.get('selected'),
            content = this.get('content');
        return selected === content;
      }.property('selected'),

      parentValueBinding: 'parentView.value',
      parentDeltaBinding: 'parentView.delta',
      selectedBinding: 'parentView.selected',

      position: function() {
        return this.getWithDefault('content.startAt', 0) - this.getWithDefault('parentValue', 0);
      }.property('parentValue', 'content.startAt'),

      percentage: function() {
        var parentDelta = this.getWithDefault('parentDelta', 1),
            position = this.get('position') + parentDelta,
            fullDelta = parentDelta * 2;
        return position / fullDelta * 100;
      }.property('position', 'parentDelta'),

      percentageDidChange: function() {
        var percentage = this.get('percentage');
        this.setStyle('left', percentage.toFixed(2) + '%');
      }.observes('percentage').on('didInsertElement'),

      width: function() {
        var startAt = this.get('content.startAt'),
            finishAt = this.get('content.finishAt');

        return finishAt ? finishAt - startAt : 0;
      }.property('content.startAt', 'content.finishAt'),

      relativeWidth: function() {
        var width = this.get('width'),
            fullDelta = this.get('parentDelta') * 2;

        return width / fullDelta * 100;
      }.property('width', 'parentDelta'),

      relativeWidthDidChange: function() {
        var relativeWidth = this.get('relativeWidth'),
            width = relativeWidth > 1 ? relativeWidth.toFixed(2) + '%' : '1px';

        this.setStyle('width', width);
      }.observes('relativeWidth').on('didInsertElement'),

      tagClassName: function() {
        return this.get('content.tagClassName');
      }.property('content.tagClassName'),

      mouseEnter: function() {
        this.set('hasMouseOver', true);
      },

      mouseLeave: function() {
        this.set('hasMouseOver', false);
      },

      click: function() {
        var content = this.get('content');
        this.set('selected', content);
      }
    })
  }),

  deltaPerPixel: function() {
    var element = this.get('element'),
        delta = this.get('delta');

    return delta / element.clientWidth;
  }.property().volatile(),

  mouseDown: function(e) {
    this._mouseUpHandler = $.proxy(this, '_mouseUp');
    this._mouseMoveHandler = $.proxy(this, '_mouseMove');

    $('body')
    .addClass('is-dragging')
    .on({
      mouseup: this._mouseUpHandler,
      mousemove: this._mouseMoveHandler
    }, {
      clientX: e.clientX,
      deltaPerPixel: this.get('deltaPerPixel'),
      value: this.get('value').getTime()
    });

    this.$().addClass('dragging');
  },

  _mouseUp: function(e) {
    this.get('momentsView').setStyle('transform', null);

    $('body')
    .removeClass('is-dragging')
    .off({
      mouseup: this._mouseUpHandler,
      mousemove: this._mouseMoveHandler
    });
    this.$().removeClass('dragging');
  },

  _mouseMove: function(e) {
    var data = e.data,
        dx = e.clientX - data.clientX,
        delta = dx * 2 * data.deltaPerPixel,
        value = new Date(data.value - delta);

    this.set('value', value);
  },

  mouseWheel: function(e) {
    var minZoom = this.get('minZoom'),
        maxZoom = this.get('maxZoom'),
        delta = this.get('delta'),
        newDelta = delta + e.wheelDelta * 100000;

    if (newDelta >= minZoom && newDelta <= maxZoom) {
      e.preventDefault();
      this.set('delta', newDelta);
    }
  },

  touchStart: function(e) {
    this._touchMoveHandler = $.proxy(this, '_touchMove');
    this._touchEndHandler = $.proxy(this, '_touchEnd');

    $('body')
    .addClass('is-touching')
    .on({
      touchmove: this._touchMoveHandler,
      touchend: this._touchEndHandler
    }, {
      touches: e.touches,
      deltaPerPixel: this.get('deltaPerPixel'),
      value: this.get('value').getTime()
    });
  },

  _touchMove: function(e) {
    var data = e.data,
        dx = e.touches[0].clientX - data.touches[0].clientX,
        delta = dx * 2 * data.deltaPerPixel,
        value = new Date(data.value - delta);

    this.set('value', value);
  },

  _touchEnd: function(e) {
    $('body')
    .removeClass('is-touching')
    .off({
      touchmove: this._touchMoveHandler,
      touchend: this._touchEndHandler
    });

    this._touchMoveHandler = null;
    this._touchEndHandler = null;
  }
});

Ember.Handlebars.helper('timeline', App.TimelineView);
