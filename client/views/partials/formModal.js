Template.formModal.onRendered(function () {
  // $('#inputForm').form();
});

Template.formModal.helpers({
  docToUpdate: function () {
    return DocToUpdate.get();
  },
  modalText: function () {
    if (!DocToUpdate.get()) {
      return 'Add New';
    }else {
      return 'Edit';
    }
  },
  isAddNew: function (text) {
    return text === 'Add New';
  }
});

Template.inputFormFields.events({
  'click .cancel.button': function () {
    ModalController.hide();
  }
});
