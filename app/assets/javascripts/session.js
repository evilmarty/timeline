App.Session = Ember.Object.extend({
  store: localStorage,

  unknownProperty: function(name, value) {
    var store = this.get('store');
    return store.getItem(name);
  },

  setUnknownProperty: function(name, value) {
    var store = this.get('store');

    if (Ember.isNone(value)) {
      store.removeItem(name);
    } else {
      store.setItem(name, value);
    }

    return value;
  }
});

App.register('session:main', App.Session);
App.inject('route', 'session', 'session:main');
App.inject('controller', 'session', 'session:main');
