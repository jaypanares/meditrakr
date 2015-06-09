// function requireLogin(context) {
//   console.log('triggersEnter');
// }

// FlowRouter.route('/', {
//   name: 'landing',
//   action: function (params) {
//     FlowLayout.render('appLayout', {
//       header: 'header',
//       main: 'landing',
//       footer: 'footer'
//     });
//   }
// });

// FlowRouter.route('/home', {
//   name: 'home',
//   triggersEnter: [requireLogin],
//   subscriptions: function () {
//     this.register('userHome', Meteor.subscribe('userMedicines'));
//   },
//   action: function (params) {
//     FlowLayout.render('appLayout', {
//       header: 'header',
//       main: 'home',
//       footer: 'footer'
//     });
//   }
// });

// FlowRouter.route('/login', {
//   name: 'login',
//   action: function (params) {
//     FlowLayout.render('appLayout', {
//       header: 'header',
//       main: 'login',
//       footer: 'footer'
//     });
//   }
// });
