App.ArrayTransform = DS.Transform.extend({
  deserialize: function(serialized) {
    return Ember.makeArray(serialized);
  },

  serialize: function(deserialized) {
    return Ember.makeArray(deserialized);
  }
});
