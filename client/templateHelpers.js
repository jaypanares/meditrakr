DocToUpdate = new ReactiveVar(null);
LoginError = new ReactiveVar(null);
RegisterAccount = new ReactiveVar(false);
EmailValues = new ReactiveVar(null);
PasswordValues = new ReactiveVar(null);

ModalController = {
  show: function (modalName) {
    $(modalName)
    .modal({
      onHidden: function () {
        DocToUpdate.set(null);
        AutoForm.resetForm('inputForm');
      }
    })
    .modal('show');
  },
  hide: function () {
    $('.ui.modal').modal('hide');
  }
}
