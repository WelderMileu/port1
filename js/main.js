(function(){
	'use static';	
	const $ = event => document.querySelector(event);


	// menu responsivo
	const toggle = () => $('.nav-response').classList.toggle('abrir');

	$('.bars').addEventListener('click', toggle);
	$('#close').addEventListener('click', toggle);

})();