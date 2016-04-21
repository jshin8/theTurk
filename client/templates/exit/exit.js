var turkGetParam = function ( name, defaultValue ) { 
   var regexS = "[\?&]"+name+"=([^&#]*)"; 
   var regex = new RegExp( regexS ); 
   var tmpURL = window.location.href; 
   var results = regex.exec( tmpURL ); 
   if( results == null ) { 
     return defaultValue; 
   } else { 
     return results[1];    
   } 
}
// Template.exit.rendered = function({
// 		var assignmentId = turkGetParam('assignmentId', "");
// 		var hitId = turkGetParam('assignmentId', "");
// 		if (assignmentId) {
// 			console.log('assignmentId', assignmentId);
//   			document.getElementById('assignmentId').value = assignmentId;
// 		}
// 		else {
// 			console.log('hitId', hitId);
// 			document.getElementById('assignmentId').value = hitId;
// 		}
// })

Template.exit.helpers({
	assignmentId: function() {
		var assignmentId = turkGetParam('assignmentId', "");
		var hitId = turkGetParam('hitId', "");
		if (assignmentId) {
			console.log('assignmentId', assignmentId);
			return assignmentId
		}
		else {
			console.log('hitId', hitId);
			return hitId
		}
	}
})