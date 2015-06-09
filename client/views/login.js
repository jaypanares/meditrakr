var initializeForm = function (formId) {
  $(formId).form('set values', {
    email: EmailValues.get(),
    password: PasswordValues.get()
  });
};

Template.registerForm.onRendered(function () {
  initializeForm('#registerForm');
});

Template.loginForm.onRendered(function () {
  initializeForm('#loginForm');
});

Template.login.helpers({
  loginErrorMessage: function () {
    return LoginError.get();
  },
  getSchema: function () {
    if (RegisterAccount.get()) {
      return Schemas.RegisterAccount;
    }else {
      return Schemas.UserAccount;
    }
  },
  isRegister: function () {
    return RegisterAccount.get();
  }
});

Template.login.events({
  'click #signInBtn': function (evt, tpl) {
    evt.preventDefault();
    RegisterAccount.set(false);
  },
  'click #registerBtn': function (evt, tpl) {
    evt.preventDefault();
    if (!RegisterAccount.get()) {
      EmailValues.set($('#loginForm').form('get value', 'email'));
      PasswordValues.set($('#loginForm').form('get value', 'password'));
      RegisterAccount.set(true);
    }
  }
});
