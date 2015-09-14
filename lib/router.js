FlowRouter.route('/', {
  name: 'index',
  action: function() {
    BlazeLayout.render('layout', {content: 'index'});
  },
});

FlowRouter.route('/about', {
  name: 'about',
  action: function() {
    BlazeLayout.render('layout', {content: 'about'});
  },
});

FlowRouter.route('/login', {
  name: 'login',
  action: function() {
    BlazeLayout.render('layout', {content: 'login'});
  },
});

FlowRouter.route('/signup', {
  name: 'signup',
  action: function() {
    BlazeLayout.render('layout', {content: 'signup'});
  },
});

FlowRouter.route('/userHome', {
  name: 'userHome',
  action: function() {
    if (Meteor.userId()) {
      BlazeLayout.render('layout', {content: 'userHome'});
    } else {
      FlowRouter.go('login');
    }
  },
});
