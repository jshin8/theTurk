Template.home.events({
	'submit form': function(e, template) {
		e.preventDefault();
		var newTask = {
			username: $('#username').val(),
		};
		console.log(newTask,'newTask')
		Results.insert(newTask, function(error,result) {
			if(!error) {
				Session.setPersistent('turkerId', result)
				FlowRouter.go('/rater');
			}
			else {
				console.log('error: ', error)
			}
		});
	}
});

