ContactManager.Views.Contacts = Backbone.View.extend({
  template: _.template($('#tpl-contacts').html()),
  initialize: function() {
    this.collection.on('change', this.listening, this);
  },
  renderOne: function(contact) {
    var itemView = new ContactManager.Views.Contact({model: contact});
    this.$('.contacts-container').append(itemView.render().$el);
  },

  render: function() {
    var html = this.template();
    that = this;
    this.$el.html('');

    myFetch = this.collection.fetch();

    myFetch.done(function() {
      _.each(that.collection.models, function(item) {
          contactView = new ContactManager.Views.Contact ({ model: item });
          that.$el.append(contactView.render().el);
      });
    });


    this.collection.each(this.renderOne, this);

    return this;
  },
  listening: function() {
    this.render();
  }
});
