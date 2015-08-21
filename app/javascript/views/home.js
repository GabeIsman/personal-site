var template = require('./home.jade');
var resume = require('./resume');

var Home = Backbone.View.extend({
  initialize: function(options) {
    this.render();
  },

  render: function() {
    this.$el.html(template(resume));
  }
});

module.exports = Home;
