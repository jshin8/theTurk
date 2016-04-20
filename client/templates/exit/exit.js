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
Template.exit.helpers({
	assignmentId: function(){

		var hitId = turkGetParam('hitId', "");
		console.log('hitId', hitId);
  		// document.getElementById('assignmentId').value = assignmentID;

		var parentWindow = window.parent; 
		var href = location.href;
		console.log('parentWindow', parentWindow);
		console.log('href',href)

		// var gupfunc = gup('hitId');
		// console.log('gupfunc',gupfunc)

		// var assignmentId = $("input[name='hitId']").getAttribute('value');
		// console.log('assignmentId', assignmentId);
		// return assignmentId
	}
})

