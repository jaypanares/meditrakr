Template.header.viewmodel({
  userstatus() {
    return Meteor.userId();
  },

  logOut(evt) {
    evt.preventDefault();

    Meteor.logout(function(logoutError) {
      if (!logoutError) {
        FlowRouter.go('login');
      }
    });
  },
});
