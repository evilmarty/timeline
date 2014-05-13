App.AuthController = Ember.Controller.extend({
  adapterBinding: 'store.defaultAdapter',
  accessTokenBinding: 'session.accessToken',

  user: null,

  hasAccessToken: Ember.computed.bool('accessToken'),
  isLoggedIn: Ember.computed.bool('user'),
  isLoggedOut: Ember.computed.not('isLoggedIn'),

  init: function() {
    this.accessTokenDidChange();
  },

  login: function(credentials) {
    var auth = this;

    return this.ajax('/authentication', credentials, 'POST').then(function(data) {
      auth.set('accessToken', data.access_token);

      // Need to flush the bindings before we move on.
      Ember.run.sync();

      return auth.load()
    }, function(xhr) {
      return Ember.RSVP.reject(xhr.responseJSON);
    });
  },

  logout: function() {
    this.setProperties({
      accessToken: null,
      user: null
    });
  },

  load: function() {
    var auth = this, user;

    if (this.get('isLoggedIn')) {
      user = this.get('user');
      return Ember.RSVP.resolve(user);
    } else if (this.get('hasAccessToken')) {
      return this.sync({}, 'GET').then(null, function() {
        // Login failed, remove the token and try again.
        auth.set('accessToken', null);
      });
    } else {
      return Ember.RSVP.reject();
    }
  },

  create: function(data) {
    return this.sync(data, 'POST');
  },

  update: function(data) {
    return this.sync(data, 'PUT');
  },

  accessTokenDidChange: function() {
    var accessToken = this.get('accessToken'),
        adapter = this.get('adapter'),
        headers = adapter.get('headers') || {},
        authorization = null;

    headers['Authorization'] = !accessToken || ['Token', accessToken].join(' ');

    adapter.set('headers', headers);
  }.observes('accessToken'),

  ajax: function(url, data, method) {
    var store = this.get('store'),
        adapter = this.get('adapter'),
        options = {
          data: this.serialize(data)
        },
        auth = this;

    return adapter.ajax(url, method, options);
  },

  sync: function(data, method) {
    var auth = this,
        store = this.get('store');

    return this.ajax('/me', data, method).then(function(data) {
      if (data && data.user) {
        auth.set('accessToken', data.user.access_token);
        store.pushPayload('user', data);
        return store.findById('user', data.user.id);
      }
    }).then(function(user) {
      auth.set('user', user);
      return Ember.RSVP.resolve(user);
    });
  },

  serialize: function(originalData) {
    var data = {};

    Ember.$.each(originalData, function(key, value) {
      data[Ember.String.decamelize(key)] = value;
    });

    return data;
  }
});
