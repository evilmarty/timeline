App.StatusesRoute = App.Route.extend({
  actions: {
    queryParamsDidChange: function(changed) {
      this.refresh();
    }
  },

  beforeModel: function(transition) {
    this.checkAuthentication(transition);
  },

  model: function(params) {
    var project = this.modelFor('project');
    return project.get('statuses');
  },

  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('project', this.modelFor('project'));
  }
});
