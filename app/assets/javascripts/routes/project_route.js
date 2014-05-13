App.ProjectRoute = App.Route.extend({
  actions: {
    newStatus: function(status) {
      var project = this.currentModel;

      status.project = project;
      status.startAt = status.startAt || new Date();
      status = this.store.createRecord('status', status);

      status.save().then(function() {
        return project.get('statuses');
      }).then(function(statuses) {
        statuses.pushObject(status);
      });
    },

    edit: function() {
      this.render('project/edit', {
        outlet: 'modals'
      });
    },

    save: function() {
      this.currentModel.save().then(function() {
        this.disconnectOutlet("modals");
      }.bind(this));
    },

    cancel: function() {
      this.currentModel.rollback();
      this.disconnectOutlet("modals");
    }
  },

  beforeModel: function(transition) {
    this.checkAuthentication(transition);
  }
});
