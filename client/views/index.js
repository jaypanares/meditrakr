Template.header.helpers({
  loggedInUser: function () {
    return Meteor.user().emails[0].address;
  }
});

Template.header.events({
  'click #signOut': function () {
    Meteor.logout(function (error) {
      if (error) {
        console.log(error.reason);
      }else {
        Router.go('login');
      }
    })
  }
});
