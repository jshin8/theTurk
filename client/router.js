//home route
FlowRouter.route('/', {
  name: 'home',
  action: function () {
    BlazeLayout.render('layout', {content: 'home'});
  }
});

//admin routes
// FlowRouter.route('/accountsadmin', {
//   action: function () {
//     BlazeLayout.render('layout', {content: 'accountsAdmin'});
//   }
// });

// FlowRouter.route('/ordersadmin', {
//   action: function () {
//     BlazeLayout.render('layout', {content: 'ordersAdmin'});
//   }
// });


// //client/worker routes shared
// FlowRouter.route('/itemhistory', {
//   action: function () {
//     BlazeLayout.render('layout', {content: 'itemList'});
//   }
// });

// //worker routes
// FlowRouter.route('/:_id', {
//   action: function () {
//     BlazeLayout.render('layout', {content: 'specificOrder'});
//   }
// });

FlowRouter.route('/rater', {
	action: function() {
		BlazeLayout.render('layout', {content: 'rater'});
	}
});


// //redirects to '/' when logged out
//  Tracker.autorun(function () {
//   if (!(Meteor.userId())){
//   	FlowRouter.go('home');
//   }
// });
