"use strict"
console.log("load sleep.js")

function sleep(sleepMs){
	`
		sleep time (micro seconds)
	`
	return(
		new Promise(
			function(resolve,reject){
				setTimeout(
					function(){
						resolve("wait "+sleepMs+" ms!!")
					},sleepMs
				)
			}
		)
	)
}