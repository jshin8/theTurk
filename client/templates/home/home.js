var turkGetParam = function ( name, defaultValue ) { 
   var regexS = "[\?&]"+name+"=([^&#]*)"; 
   var regex = new RegExp( regexS ); 
   var tmpURL = window.location.href; 
   console.log('tmpURL',tmpURL)
   var results = regex.exec( tmpURL ); 
   if( results == null ) { 
     return defaultValue; 
   } else { 
     return results[1];    
   } 
}


Template.home.events({
	'submit form': function(e, template) {
		e.preventDefault();
		var assignmentId = turkGetParam('assignmentId', "");
		console.log('assignmentID', assignmentID);
		var counterbalancer = Math.floor(Math.random() * (3-1)) + 1;
		var newTask = {
			username: $('#username').val(),
			counterbalancer: counterbalancer,
			assignmentId: assignmentId
		};
		console.log(newTask,'newTask')
		Results.insert(newTask, function(error,result) {
			if(!error) {
				Session.setPersistent('turkerId', result)
				Session.setPersistent('counterbalancer', counterbalancer)
				if (counterbalancer == 1) {
					FlowRouter.go('/rater');
				}
				else {
					FlowRouter.go('/survey')
				}
			}
			else {
				console.log('error: ', error)
			}
		});
	}
});

