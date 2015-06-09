var inputCallbackHandler = function (error, result, hookContext) {
  if (!error) {
    hookContext.done();
    ModalController.hide();
  }else {
    console.log(error.reason);
  }
}

var loginCallbackHandler = function (error) {
  if (!error) {
    LoginError.set(null);
    RegisterAccount.set(null);
    EmailValues.set(null);
    PasswordValues.set(null);
    Router.go('home');
  }else {
    LoginError.set(error.reason);
  }
}

var inputHooks = {
  onSubmit: function (insertDoc, updateDoc, currentDoc) {
    var hookContext = this;
    if (DocToUpdate.get()) {
      Meteor.call('medicineUpdate', updateDoc, currentDoc._id, function (error, result) {
        inputCallbackHandler(error, result, hookContext);
      });
    }else {
      Meteor.call('medicineInsert', insertDoc, function (error, result) {
        inputCallbackHandler(error, result, hookContext);
      });
    }
    return false;
  },
  onSuccess: function (formType, result) {
    ModalController.hide();
  }
};

var loginHooks = {
  onSubmit: function (insertDoc, updateDoc, currentDoc) {
    if (!insertDoc.confirmPassword) {
      Meteor.loginWithPassword(
        insertDoc.email,
        insertDoc.password,
        function (error) {
          loginCallbackHandler(error);
        }
      );
    }else {
      Accounts.createUser({
        email: insertDoc.email,
        password: insertDoc.password
      }, function (error) {
        loginCallbackHandler(error);
      });
    }
    this.done();
    return false;
  }
};

AutoForm.addHooks(['inputForm'], inputHooks);
AutoForm.addHooks(['loginForm', 'registerForm'], loginHooks);
