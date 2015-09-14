Template.login.viewmodel('login', {
  username: '',
  password: '',
  confirmPassword: '',
  errorMessage: '',
  isCreateAccount: false,

  toggleCreateAccount(evt) {
    evt.preventDefault();

    this.isCreateAccount(!this.isCreateAccount());
  },

  handleFormSubmit(evt) {
    evt.preventDefault();

    Meteor.call('createAccount', this.username(), this.password(), this.confirmPassword(),
    (createError, result) => {
      if (createError) {
        this.errorMessage(createError.reason);
      } else {
        Meteor.loginWithPassword(result, this.password(), (loginError) => {
          if (loginError) {
            this.errorMessage(loginError.reason);
          } else {
            FlowRouter.go('userHome');
          }
        });
      }
    });
  },
});
