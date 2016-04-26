
Meteor.methods({
	liker: function(turkerId,array,index,timestamp) {
		var imageNumber = array[index];
		Results.update(turkerId, {$push:{images:{imageNumber:imageNumber,rating:1,timestamp:timestamp}}}, function(error,result) {
			if (error){
				console.log('error: ', error);
			}
		});
	},
	disliker: function(turkerId,array,index,timestamp) {
		var imageNumber = array[index];
		Results.update(turkerId, {$push:{images:{imageNumber:imageNumber,rating:0,timestamp:timestamp}}}, function(error,result) {
			if (error){
				console.log('error: ', error);
			}
		});
	},
	download: function(id) {
		var result = Results.findOne(id)
		if (result.images) {
			var images = result.images;
			_.extend(images[0], {qualtricsCode:result.qualtricsCode,counterbalancer:result.counterbalancer,workerId:result.workerId})
		}
		var collection = images

		var heading = true; // Optional, defaults to true
		var delimiter = ","; // Optional, defaults to ",";
		return exportcsv.exportToCSV(collection, heading, delimiter);
	},
	downloadAll: function() {
		var allRecords = Results.find().fetch();
		var images = [];
		_.each(allRecords, function(record) {
			if (record.images && record.qualtricsCode) {
				_.extend(record.images[0],{qualtricsCode:record.qualtricsCode,counterbalancer:record.counterbalancer,workerId:result.workerId});
				images = images.concat(record.images);
			}
		});
		var collection =  images;

		var heading = true; 
		var delimiter = ",";
		return exportcsv.exportToCSV(collection, heading, delimiter);
	},
	surveyCode: function(turkerId,code) {
		Results.update(turkerId, {$set:{qualtricsCode:code}}, function(error,result) {
			if (error) {
				console.log('error: ', error);
			}
		});
	}
});