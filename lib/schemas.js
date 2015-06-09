Schemas = {};

// USER ACCOUNT SCHEMA VALIDATION MESSAGES
Schemas.UserAccount = new SimpleSchema({
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  password: {
    type: String,
    regEx: /^\w{5,}$/
  }
});

Schemas.UserAccount.messages({
  "regEx": [
    {exp: SimpleSchema.RegEx.Email, msg: "Please enter a valid email."},
    {exp: /^\w{5,}$/, msg: "Password must be at least 6 alphanumeric characters."}
  ]
});

Schemas.RegisterAccount = new SimpleSchema([Schemas.UserAccount, {
  confirmPassword: {
    type: String,
    custom: function () {
      if (this.value !== this.field('password').value) {
        return 'passwordMismatch';
      }
    }
  }
}]);

Schemas.RegisterAccount.messages({
  'passwordMismatch': 'Passwords do not match.'
});

// MEDICINE SCHEMA AND VALIDATION MESSAGES FOR AutoForm
Schemas.Medicines = new SimpleSchema({
  genericName: {
    type: String,
  },
  brandName: {
    type: String,
  },
  indication: {
    type: String,
  },
  dosage: {
    type: String,
  },
  unit: {
    type: String,
  },
  singleDose: {
    type: String,
    regEx: /^(\d+(.\d+)?)$/
  },
  dailyDose: {
    type: String,
    regEx: /^(\d+(.\d+)?)$/
  },
  totalAmount: {
    type: String,
    regEx: /^(\d+(.\d+)?)$/
  }
});

Schemas.Medicines.messages({
  "regEx": [
    {exp: /^(\d+(.\d+)?)$/, msg: "Please enter a number."}
  ]
});
