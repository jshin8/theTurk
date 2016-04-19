
Meteor.methods({
	liker: function(turkerId,array,index,timestamp) {
		var imageNumber = array[index];
		Results.update({_id:turkerId}, {$push:{images:{imageNumber:imageNumber,rating:'l',timestamp:timestamp}}}, function(error,result) {
			if (error){
				console.log('error: ', error);
			}
		});
	},
	disliker: function(turkerId,array,index,timestamp) {
		var imageNumber = array[index];
		Results.update({_id:turkerId}, {$push:{images:{imageNumber:imageNumber,rating:'d',timestamp:timestamp}}}, function(error,result) {
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
	}


});