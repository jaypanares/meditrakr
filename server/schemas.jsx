SimpleSchema.messages({'passwordMismatch': 'Passwords do not match'});

CreateAccountSchema = new SimpleSchema({
  username: {
    type: String,
    min: 6,
  },
  password: {
    type: String,
    min: 6,
  },
  repeatPassword: {
    type: String,

    custom() {
      if (this.value !== this.field('password').value) {
        return 'passwordMismatch';
      }
    },
  },
});
