Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <ul class=\"nav navbar-nav hidden-xs\">\n          <li ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":dropdown navigationVisible:open")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"dropdown\">\n            <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleNavigation", {hash:{
    'bubbles': (false),
    'preventDefault': (true)
  },hashTypes:{'bubbles': "BOOLEAN",'preventDefault': "BOOLEAN"},hashContexts:{'bubbles': depth0,'preventDefault': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" href=\"#\" class=\"dropdown-toggle\">");
  stack1 = helpers._triageMustache.call(depth0, "model.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" <b class=\"caret\"></b></a>\n            <ul class=\"dropdown-menu\">\n              <li>\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "projects", options) : helperMissing.call(depth0, "link-to", "projects", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n              </li>\n              <li class=\"divider\"></li>\n              <li>\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "settings", options) : helperMissing.call(depth0, "link-to", "settings", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n              </li>\n              <li class=\"divider\"></li>\n              <li>\n                <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "logout", {hash:{
    'preventDefault': (true)
  },hashTypes:{'preventDefault': "BOOLEAN"},hashContexts:{'preventDefault': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" href=\"#\">\n                  <span class=\"glyphicon glyphicon-log-out\"></span>\n                  Logout\n                </a>\n              </li>\n            </ul>\n          </li>\n        </ul>\n\n        <p class=\"navbar-text visible-xs\">");
  stack1 = helpers._triageMustache.call(depth0, "model.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n        <ul class=\"nav navbar-nav visible-xs\">\n          <li>\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "projects", options) : helperMissing.call(depth0, "link-to", "projects", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </li>\n          <li class=\"nav-divider\"></li>\n          <li>\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "settings", options) : helperMissing.call(depth0, "link-to", "settings", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </li>\n          <li class=\"nav-divider\"></li>\n          <li>\n            <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "logout", {hash:{
    'preventDefault': (true)
  },hashTypes:{'preventDefault': "BOOLEAN"},hashContexts:{'preventDefault': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" href=\"#\">\n              <span class=\"glyphicon glyphicon-log-out\"></span>\n              Logout\n            </a>\n          </li>\n        </ul>\n      ");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("\n                  <span class=\"glyphicon glyphicon-list-alt\"></span>\n                  Projects\n                ");
  }

function program4(depth0,data) {
  
  
  data.buffer.push("\n                  <span class=\"glyphicon glyphicon-cog\"></span>\n                  Settings\n                ");
  }

function program6(depth0,data) {
  
  
  data.buffer.push("\n              <span class=\"glyphicon glyphicon-list-alt\"></span>\n              Projects\n            ");
  }

function program8(depth0,data) {
  
  
  data.buffer.push("\n              <span class=\"glyphicon glyphicon-cog\"></span>\n              Settings\n            ");
  }

function program10(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <ul class=\"nav navbar-nav\">\n          <li>\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "login", options) : helperMissing.call(depth0, "link-to", "login", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </li>\n        </ul>\n      ");
  return buffer;
  }
function program11(depth0,data) {
  
  
  data.buffer.push("Login");
  }

  data.buffer.push("<nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleNavigation", {hash:{
    'bubbles': (false),
    'preventDefault': (true)
  },hashTypes:{'bubbles': "BOOLEAN",'preventDefault': "BOOLEAN"},hashContexts:{'bubbles': depth0,'preventDefault': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" type=\"button\" class=\"navbar-toggle\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Timeline App</a>\n    </div>\n    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":collapse :navbar-collapse :navbar-right navigationVisible:in")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"collapse navbar-collapse navbar-right\">\n      ");
  stack1 = helpers['if'].call(depth0, "isLoggedIn", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(10, program10, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n  </div>\n</nav>\n\n<div class=\"container\">\n  ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{
    'view': ("overlay"),
    'class': ("modal-backdrop")
  },hashTypes:{'view': "STRING",'class': "STRING"},hashContexts:{'view': depth0,'class': depth0},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "modals", options) : helperMissing.call(depth0, "outlet", "modals", options))));
  data.buffer.push("\n</div>\n");
  return buffer;
  
});
