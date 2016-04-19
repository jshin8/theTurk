
Meteor.methods({
	liker: function(turkerId,array,index,timestamp) {
		var imageNumber = array[index];
		Results.update({_id:turkerId}, {$push:{images:{userId:turkerId,imageNumber:imageNumber,rating:1,timestamp:timestamp}}}, function(error,result) {
			if (error){
				console.log('error: ', error);
			}
		});
	},
	disliker: function(turkerId,array,index,timestamp) {
		var imageNumber = array[index];
		Results.update({_id:turkerId}, {$push:{images:{userId:turkerId,imageNumber:imageNumber,rating:0,timestamp:timestamp}}}, function(error,result) {
			if (error){
				console.log('error: ', error);
			}
		});
	},
	download: function(id) {
		var collection =  Results.findOne(id).images;

		var heading = true; // Optional, defaults to true
		var delimiter = ","; // Optional, defaults to ",";
		return exportcsv.exportToCSV(collection, heading, delimiter);
	},
	downloadAll: function() {
		var allRecords = Results.find().fetch();
		var images = []
		_.each(allRecords, function(record) {
			images = images.concat(record.images)
		})
		var collection =  images;

		var heading = true; 
		var delimiter = ",";
		return exportcsv.exportToCSV(collection, heading, delimiter);
	}


});