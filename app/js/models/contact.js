// contact.js

ContactManager.Models.Contact = Backbone.Model.extend({
  defaults: {
     name: "John Davies",
     tel: "972-492-1636",
     email: "John@davies.com",
     avatar: null
  },
  initialize: function() {
    this.set('avatar', _.random(1, 15) + '.jpg');
  }
});
