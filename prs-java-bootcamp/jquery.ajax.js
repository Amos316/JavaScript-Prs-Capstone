$().ready(function() {
	var url = 'http://prs.gregorydoud.net/users/list';

	$("body").css("font-size", 26pt);
	
	$("button").click(function(){
		$.get(url).done(function(resp) {

		});
	});

});



