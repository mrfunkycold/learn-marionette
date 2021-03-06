define(function(require) {
  'use strict';

  var $ = require('jquery');
  var Loading = require('common/Loading');
  var ShowMissingContact = require('content/views/ShowMissingContact');
  var EditContactView = require('content/views/EditContactView');
  var ContactManager = require('main/ContactManager');

  function createEditContactView(contact) {
    var view = new EditContactView({
      model: contact
    });

    view.on('form:submit', function(data) {
      if (contact.save(data)) {
        ContactManager.trigger('contact:show', contact.get('id'));
      } else {
        view.triggerMethod('form:data:invalid', contact.validationError);
      }
    });

    return view;
  }

  return {
    editContact: function(model) {
      var view;

      if (model === undefined) {
        view = new ShowMissingContact();
      } else {
        view = createEditContactView(model);
      }

      ContactManager.mainRegion.show(view);
    },
    editContactById: function(id) {
      Loading.show('Editing a contact', 'Loading...');

      var fetchingContact = ContactManager.request('contact:entity', id);

      $.when(fetchingContact).done(function(contact) {
        this.editContact(contact);
      }.bind(this));
    }
  };
});
