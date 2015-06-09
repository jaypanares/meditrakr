Template.home.helpers({
  medicines: function () {
    return Medicines.find();
  },
  pluralized: function (text, amount) {
    return pluralize(text, parseInt(amount));
  }
});

Template.home.events({
  'click #takeMedicineBtn': function (evt, tpl) {
    evt.preventDefault();
    Meteor.call(
      'medicineDecrement',
      this._id,
      this.singleDose
    );
  },
  'click #addMedicineBtn': function (evt, tpl) {
    evt.preventDefault();
    ModalController.show('#formModal');
  },
  'click #removeMedicineBtn': function (evt, tpl) {
    evt.preventDefault();
    Meteor.call('medicineRemove', this._id);
  },
  'click #editMedicineBtn': function (evt, tpl) {
    evt.preventDefault();
    DocToUpdate.set(Medicines.findOne({_id: this._id}));
    ModalController.show('#formModal');
  }

});
