Meteor.methods({
	liker: function(turkerId,array,index) {
		console.log(turkerId,array,index)
		var imageNumber = array[index]
		Results.update({_id:turkerId}, {$push:{images:{imageNumber:imageNumber,rating:'like'}}}, function(error,result) {
			if (error){
				console.log('error: ', error)
			}
			else {
				console.log('result',result)
			}
		});
	},
	disliker: function(turkerId,array,index) {
		console.log(turkerId,array,index)
		var imageNumber = array[index]
		Results.update({_id:turkerId}, {$push:{images:{imageNumber:imageNumber,rating:'dislike'}}}, function(error,result) {
			if (error){
				console.log('error: ', error)
			}
			else {
				console.log('result', result)
			}
		});
	},
})