App.OverlayView = Ember.ContainerView.extend({
  isVisible: Ember.computed.bool('childViews.length')
});
