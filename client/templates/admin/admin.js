Template.dataTable.helpers({
	results: function() {
		return Results.find().fetch()
	},
	completeResult: function() {
		if (this.images && this.qualtricsCode) {
			return true
		}
	}
})


Template.dataTable.events({
	'click #buttonDownload': function(event) {
		var id = this._id
		var nameFile = 'ImageRater-' + id + '.csv';
		Meteor.call('download', id, function(err, fileContent) {
		    if(fileContent){
		     var blob = new Blob([fileContent], {type: "text/plain;charset=utf-8"});
		     saveAs(blob, nameFile);
		    }
	  	});
	},
	'click #buttonDownloadAll': function(event) {
		var date = Date.now()
		var nameFile = 'ImageRaterAll-' + date + '.csv';
		Meteor.call('downloadAll', function(err, fileContent) {
		    if(fileContent){
		     var blob = new Blob([fileContent], {type: "text/plain;charset=utf-8"});
		     saveAs(blob, nameFile);
		    }
	  	});
	}
});
