Template.exit.helpers({
	assignmentId: function(){
		var assignmentId = $("input[name='hitId']").getAttribute('value');
		console.log('assignmentId', assignmentId);
		return assignmentId
	}
})