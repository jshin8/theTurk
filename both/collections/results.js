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
	assignmentId: {
		type: String,
		optional:true
	},
	counterbalancer: {
		type: Number,
		optional:true
	},
	qualtricsCode: {
		type: String,
		optional:true
	},
	images: {
		type: [Object],
		optional: true
	},
	'images.$.userId': {
		type: String,
		optional: true
	},
	'images.$.imageNumber': {
		type: String,
		optional: true
	},
	'images.$.rating': {
		type: Number,
		optional: true
	},
	'images.$.timestamp': {
		type: Number,
		optional:true
	}
}));

if (Meteor.isClient) {
	Tracker.autorun(function(){
	    Meteor.subscribe('allResults');
	  });
}

Accounts.config({
  forbidClientAccountCreation : true
});