Template.exit.events({
	'submit form': function(e,t) {
		e.preventDefault();
		var assignmentId = $('#assignmentId').val();
		Meteor.call('submitHIT',assignmentId, function (e,r) {
			if (e) {
				console.log('error with submitting: ',e);
			}
		})
	}
})