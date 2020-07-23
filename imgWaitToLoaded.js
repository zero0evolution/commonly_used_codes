"use strict"
console.log("load imgWaitToLoaded.js")

function awaitToLoaded(imgElem,link){
	`
		if want to catch err:
		await awaitToLoaded().catch(error => console.log(error))
	`
	return(
		new Promise((resolve,reject) => {
			imgElem.src = link
			imgElem.alt = "loading..."

			imgElem.addEventListener("load",function(){
				imgElem.classList.add("complete")
				imgElem.classList.remove("failed")
				imgElem.alt = "complete!!!"
				resolve("loaded image: "+link)
			})
			imgElem.addEventListener("error",function(){
				imgElem.classList.add("failed")
				imgElem.alt = "failed!"
				reject("loaded image failed: "+link)
			})
		})
	)
}