(function(){
	'use static';	
	const $ = event => document.querySelector(event);


	// menu responsivo

	$('.bars').addEventListener('click', function() {
		$('.nav-response').style.left = "10%";
		$('.nav-response').style.opacity = "1";
		$('.nav-response').style.visibility = "visible";
	});

})();