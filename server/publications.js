Meteor.publish('allResults', function(){
	return Results.find({});
});