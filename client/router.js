//home route
FlowRouter.route('/', {
  name: 'home',
  action: function () {
    BlazeLayout.render('layout', {content: 'home'});
  }
});

FlowRouter.route('/rater', {
	action: function() {
		BlazeLayout.render('layout', {content: 'rater'});
	}
});

FlowRouter.route('/exit', {
	action: function() {
		BlazeLayout.render('layout', {content: 'exit'});
	}
});

FlowRouter.route('/admin', {
	action: function() {
		BlazeLayout.render('layout', {content: 'admin'});
	}
});
// //redirects to '/' when logged out
//  Tracker.autorun(function () {
//   if (!(Meteor.userId())){
//   	FlowRouter.go('home');
//   }
// });
