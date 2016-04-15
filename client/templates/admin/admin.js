Template.dataTable.helpers({
	results: function() {
		return Results.find().fetch()
	}
})