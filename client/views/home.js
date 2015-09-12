Template.home.helpers({
  medicines: function() {
    return Medicines.find();
  },
  pluralized: function(text, amount) {
    return pluralize(text, parseInt(amount, 10));
  },
});

Template.home.events({
  'click #takeMedicineBtn': function(evt) {
    evt.preventDefault();
    Meteor.call(
      'medicineDecrement',
      this._id,
      this.singleDose
    );
  },
  'click #addMedicineBtn': function(evt) {
    evt.preventDefault();
    ModalController.show('#formModal');
  },
  'click #removeMedicineBtn': function(evt) {
    evt.preventDefault();
    Meteor.call('medicineRemove', this._id);
  },
  'click #editMedicineBtn': function(evt) {
    evt.preventDefault();
    DocToUpdate.set(Medicines.findOne({_id: this._id}));
    ModalController.show('#formModal');
  },

});
