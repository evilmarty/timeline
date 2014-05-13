//= require_self
//= require ./store
//= require_tree ./mixins
//= require_tree ./transforms
//= require_tree ./models
//= require_tree ./controllers
//= require_tree ./views
//= require_tree ./helpers
//= require_tree ./components
//= require_tree ./templates
//= require ./router
//= require ./routes/route
//= require_tree ./routes

VENDORS = ['webkit', 'moz', 'ms', 'o'];
STYLE_PROPERTIES = {};

$.event.fixHooks.mousewheel = { props: ['wheelDelta'] };
$.event.fixHooks.touchstart = { props: ['touches'] };
$.event.fixHooks.touchmove = { props: ['touches'] };
$.event.fixHooks.touchend = { props: ['touches'] };

Ember.View.reopen({
  setStyle: function(prop, value) {
    var element = this.get('element') || {style: {}},
        style = element.style,
        vendorProp;

    if (STYLE_PROPERTIES[prop] === undefined) {
      STYLE_PROPERTIES[prop] = prop in style ? prop : false;
      if (!STYLE_PROPERTIES[prop]) {
        vendorProp = prop[0].toUpperCase() + prop.substr(1);
        VENDORS.forEach(function(vendor) {
          var p = vendor + vendorProp;
          if (p in style) {
            STYLE_PROPERTIES[prop] = p;
            return true;
          }
        });
      }
    }

    if (STYLE_PROPERTIES[prop] !== false) {
      style[STYLE_PROPERTIES[prop]] = value;
    }

    return this;
  }
});

App = Ember.Application.create({
  customEvents:{
    mousewheel: 'mouseWheel'
  }
});
