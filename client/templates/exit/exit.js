Template.exit.helpers({
	assignmentId: function(){
		var parentWindow = window.parent; 
		var href = location.href;
		console.log('parentWindow', parentWindow);
		console.log('href',href)

		var gup = gup('hitId');
		console.log('gup',gup)

		var assignmentId = $("input[name='hitId']").getAttribute('value');
		console.log('assignmentId', assignmentId);
		return assignmentId
	}
})


function gup( name )
{
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( window.location.href );
  if( results == null )
    return "";
  else
    return results[1];
}