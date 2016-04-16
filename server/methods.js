// var getMturk = function() {
//   var awsAccessKey = process.env.AWS_ACCESS_KEY_ID2
//   var awsSecretKey = process.env.AWS_SECRET_ACCESS_KEY2
//   var creds = {
//     accessKey: awsAccessKey,
//     secretKey: awsSecretKey
//   };
//   return new MTurk({creds: creds, sandbox: true});
// };

Meteor.methods({
	liker: function(turkerId,array,index) {
		var imageNumber = array[index]
		Results.update({_id:turkerId}, {$push:{images:{imageNumber:imageNumber,rating:'l'}}}, function(error,result) {
			if (error){
				console.log('error: ', error)
			}
		});
	},
	disliker: function(turkerId,array,index) {
		var imageNumber = array[index]
		Results.update({_id:turkerId}, {$push:{images:{imageNumber:imageNumber,rating:'d'}}}, function(error,result) {
			if (error){
				console.log('error: ', error)
			}
		});
	},
	// RegisterHITType: function(params) {
	// 	check(params, {
	// 		'Operation':String,
	// 		'Title':String,
	// 		'Description':String,
	// 		'Reward':Number,
	// 		'AssignmentDurationInSeconds': Number
	// 	});
	// 	var mturk = getMturk();
	// 	console.log('asdf',mturk.RegisterHITType)
	// 	var wrapped = Meteor.wrapAsync(mturk.RegisterHITType, mturk);
	// 	console.log('jkl',wrapped)
	// 	try {
	//       return wrapped(params);
	//     } 
	//     catch (err) {
	//       console.error('errrrr', err);
	//       throw new Meteor.Error('register-failed', err);
	// 	}
	// },
})