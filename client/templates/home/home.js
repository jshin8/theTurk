Template.home.events({
	'submit form': function(e, template) {
		e.preventDefault();
		var counterbalancer = Math.floor(Math.random() * (3-1)) + 1;
		var newTask = {
			username: $('#username').val(),
			counterbalancer: counterbalancer,
		};
		console.log(newTask,'newTask')
		Results.insert(newTask, function(error,result) {
			if(!error) {
				Session.setPersistent('turkerId', result)
				Session.setPersistent('counterbalancer', counterbalancer)
				if (counterbalancer == 1) {
					FlowRouter.go('/rater');
				}
				else {
					FlowRouter.go('/survey')
				}
			}
			else {
				console.log('error: ', error)
			}
		});
	}
});

