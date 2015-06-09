Medicines = new Mongo.Collection('medicines');

Medicines.before.insert(function (userId, doc) {
  doc.singleDose = parseFloat(doc.singleDose);
  doc.dailyDose = parseFloat(doc.dailyDose);
  doc.totalAmount = parseFloat(doc.totalAmount);
  doc.owner = userId;
});

Medicines.before.update(function (userId, doc, fieldNames, modifier, options) {
  if (modifier.$set) {
    modifier.$set.singleDose = parseFloat(modifier.$set.singleDose);
    modifier.$set.dailyDose = parseFloat(modifier.$set.dailyDose);
    modifier.$set.totalAmount = parseFloat(modifier.$set.totalAmount);
  }
});

Meteor.methods({
  medicineInsert: function (doc) {
    check(doc, Schemas.Medicines);
    Medicines.insert(doc);
  },
  medicineDecrement: function (docId, value) {
    var doc = Medicines.findOne({_id: docId});
    check(doc.owner, this.userId);
    if (doc.totalAmount - value < 0) {
      value = doc.totalAmount;
    }
    Medicines.update(docId, {$inc: {totalAmount: -(value)}});
  },
  medicineUpdate: function (modifier, docId) {
    check(Medicines.findOne({_id: docId}).owner, this.userId);
    Medicines.update({_id: docId}, modifier);
  },
  medicineRemove: function (docId) {
    check(Medicines.findOne({_id: docId}).owner, this.userId);
    Medicines.remove(docId);
  }
});
