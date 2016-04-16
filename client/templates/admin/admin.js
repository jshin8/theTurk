Template.dataTable.helpers({
	results: function() {
		return Results.find().fetch()
	}
})

Template.admin.events({
	// 'click button': function() {
	// 	Meteor.call('RegisterHITType', {
	// 		'Operation':'RegisterHITType',
	// 		'Title':'PLEASE GOD WORK',
	// 		'Description':'OMG',
	// 		'Reward':2,
	// 		'AssignmentDurationInSeconds': 30000
	// 	}, function(error, result) {
	// 	        if (error) {
	// 	          console.error('error: ',error);
	// 	        } 
	// 	        else {
	// 	          console.log('got result', result);
	// 	        }
	// 	    }
	// 	)
	// }
})