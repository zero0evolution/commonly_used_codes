function loadJquerySync(){
	`
		https://code.jquery.com/jquery-3.7.1.min.js
	`
	return(
		new Promise(
			function(resolve,reject){
				// Load the script
				const script = document.createElement("script");
				script.src = 'https://code.jquery.com/jquery-3.7.1.min.js';
				script.type = 'text/javascript';
				script.addEventListener('load', () => {
					resolve(`jQuery ${$.fn.jquery} has been loaded successfully!`);
					// use jQuery below
				});
				document.head.appendChild(script);
			}
		)
	)
}