// contacts.js

ContactManager.Collections.Contacts = Backbone.Collection.extend({
  initialize: function() {
    this.listenTo(this.model, 'remove', this.remove);
    this.comparator = function(model) {
      return model.get("id");
    }
  },
  model: ContactManager.Models.Contact,
  url: 'http://localhost:3000/contacts/'
});
