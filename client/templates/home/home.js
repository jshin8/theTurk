Template.home.created = function() {
	var assignmentId = turkGetParam('hitId', "");
		// console.log('hitId', hitId);
}

Template.home.events({
	'submit form': function(e, template) {
		e.preventDefault();
		var counterbalancer = Math.floor(Math.random() * (3-1)) + 1;
		var newTask = {
			counterbalancer: counterbalancer,
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

var turkGetParam = function ( name, defaultValue ) { 
   var regexS = "[\?&]"+name+"=([^&#]*)"; 
   var regex = new RegExp( regexS ); 
   var tmpURL = window.location.href; 
   console.log('tmpURL',tmpURL)
   var results = regex.exec( tmpURL ); 
   if( results == null ) { 
     return defaultValue; 
   } 
   else { 
     return results[1];    
   } 
}