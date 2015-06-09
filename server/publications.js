Meteor.publish('userMedicines', function () {
  return Medicines.find({owner: this.userId});
});
