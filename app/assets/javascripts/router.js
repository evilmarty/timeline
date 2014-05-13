App.Router.reopen({
  location: 'auto'
});

App.Router.map(function() {
  this.resource('projects', {path: '/'}, function() {
    this.resource('project', {path: 'projects/:project_id'}, function() {
      this.resource('statuses', {path: '/'});
    });
  });
  this.route('settings');
  this.route('login');
  this.route('register');
});
