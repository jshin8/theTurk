Template.survey.helpers({
	sentenceBegin: function() {
		var turkerId = Session.get('turkerId');
		var result = Results.findOne(turkerId);
		if (result.counterbalancer == 1) {
			return 'Great! For the second part'
		}
		else {
			return 'First'
		}
	},
	sentenceFinish: function() {
		var turkerId = Session.get('turkerId');
		var result = Results.findOne(turkerId);
		if (result.counterbalancer == 1) {
			return 'finish up this HIT!'
		}
		else {
			return 'proceed to the second part of this HIT.'
		}
	}
})

Template.survey.events({
	'submit #surveyCodeForm':function(event,template) {
		event.preventDefault();
		var code = $('#surveyCode').val();
		var counterbalancer = Session.get('counterbalancer');
		var turkerId = Session.get('turkerId');

		if (code.length == 7) {
			Meteor.call('surveyCode', turkerId, code, function (error,result) {
				if (error) {
					console.log('error: ', error);
				}
				else {
					if (counterbalancer == 1) {
						FlowRouter.go('/exit');
					}
					else if (counterbalancer == 2) {
						FlowRouter.go('/rater')
					}
				}
			});
		}
		else {
			alert('Are you sure that is the right code?')
		}
	}
})