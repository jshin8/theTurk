Meteor.publish('Results', function(){
	return Results.find({});
});