"use strict"
console.log("load sleep.js")

function sleep(sleepms){
	`
		sleep time (micro seconds)
	`
	return(
		new Promise(
			function(resolve,reject){
				setTimeout(
					function(){
						resolve("wait "+sleepms+" ms!!")
					},sleepms
				)
			}
		)
	)
}