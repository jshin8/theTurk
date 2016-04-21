Template.exit.helpers({
	assignmentId: function(){
		var turkerId = Session.get('turkerId');
		var record = Results.findOne(turkerId);
		return record.assignmentId
	}
})

