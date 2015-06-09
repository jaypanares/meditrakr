Router.configure({
  layoutTemplate: 'appLayout',
  loadingTemplate: 'loading'
});

Router.route('/', {
  name: 'landing'
});

Router.route('/login', {
  name: 'login'
});

Router.route('/home', {
  name: 'home',
  waitOn: function () {
    return Meteor.subscribe('userMedicines');
  }
});

Router.onBeforeAction(function () {
  if (!Meteor.userId()) {
    Router.go('login');
  }else {
    this.next();
  }
}, {only: 'home'});

Router.onBeforeAction(function () {
  if (Meteor.userId()) {
    Router.go('home');
  }else {
    this.next();
  }
}, {only: 'landing'});
