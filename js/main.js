(function(){
	'use static';	
	const $ = event => document.querySelector(event);


	// menu responsivo

	$('.bars').addEventListener('click', function() {
		$('.nav-response').classList.toggle('abrir');
	});

	$('#close').addEventListener('click', function() {
		$('.nav-response').addClass('close');
	});

})();