// contact.js

ContactManager.Models.Contact = Backbone.Model.extend({
  defaults: {
     name: "John Davies",
     tel: "972-492-1636",
     email: "John@davies.com",
     avatar: null
  },
  url: function() {
  if (this.has ("id"))
    return 'http://localhost:3000/contacts/' + this.get("id");
  else {
    return 'http://localhost:3000/contacts/';
    }
}
});
