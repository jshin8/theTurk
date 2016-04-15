Results = new Mongo.Collection('Results');

Results.allow({
  insert: function (doc) {
    return true;
  },
  update: function (doc, fields, modifier) {
    return true;
  },
  
});



Results.attachSchema(new SimpleSchema({
	username: {
		type: String,
		label: 'username',
		optional: true
	},
	images: {
		type: [Object],
		optional: true
	},
	'images.$.imageNumber': {
		type: String,
		optional: true
	},
	'images.$.rating': {
		type: String,
		optional: true
	}
}))

if (Meteor.isClient) {
	Tracker.autorun(function(){
	    Meteor.subscribe('allResults');
	  });
}

Accounts.config({
  forbidClientAccountCreation : true
});