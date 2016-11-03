// contacts.js

ContactManager.Collections.Contacts = Backbone.Collection.extend({
  initialize: function() {
    this.listenTo(this.model, 'remove', this.remove);
  },
  model: ContactManager.Models.Contact
});
