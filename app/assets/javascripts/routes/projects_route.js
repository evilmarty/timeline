App.ProjectsRoute = App.Route.extend({
  actions: {
    newProject: function() {
      var newProjectController = this.controllerFor('newProject'),
          newProject = this.store.createRecord('project');

      newProjectController.set('content', newProject);

      this.render('projects/new', {
        outlet: 'modals',
        controller: newProjectController
      });
    },

    createProject: function() {
      var newProjectController = this.controllerFor('newProject'),
          newProject = newProjectController.get('content'),
          route = this;

      newProject.save().then(function() {
        route.disconnectOutlet("modals");
        route.transitionTo('project', newProject);
      });
    },

    cancel: function() {
      var newProjectController = this.controllerFor('newProject'),
          newProject = newProjectController.get('content');

      newProject.deleteRecord();

      this.disconnectOutlet("modals");
    }
  },

  beforeModel: function(transition) {
    this.checkAuthentication(transition);
  },

  model: function() {
    return this.store.findAll('project');
  }
});
