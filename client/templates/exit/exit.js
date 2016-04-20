Template.exit.helpers({
	assignmentId: function(){
		console.log('document',document)
		var assignmentId = $("input[name='hitId']").getAttribute('value');
		console.log('assignmentId', assignmentId);
		return assignmentId
	}
})