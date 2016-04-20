Template.exit.helpers({
	assignmentId: function(){
		var doc = window.frameElement
		console.log('document',doc)
		var assignmentId = $("input[name='hitId']").getAttribute('value');
		console.log('assignmentId', assignmentId);
		return assignmentId
	}
})