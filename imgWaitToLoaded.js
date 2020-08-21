"use strict"
console.log("load imgWaitToLoaded.js")

function imgWaitToLoaded(imgElem,link){
	`
		if want to catch err:
		await imgWaitToLoaded(imgElem,link).catch(error => console.log(error))
	`
	return(
		new Promise((resolve,reject) => {
			imgElem.src = link
			imgElem.alt = "loading..."
			imgElem.classList.add("loading")

			imgElem.addEventListener("load",function(){
				imgElem.classList.add("complete")
				imgElem.classList.remove("failed")
				imgElem.classList.remove("loading")
				imgElem.alt = "complete!!!"
				resolve("loaded image: "+link)
			})
			imgElem.addEventListener("error",function(){
				imgElem.classList.add("failed")
				imgElem.classList.remove("loading")
				imgElem.alt = "failed!"
				reject("loaded image failed: "+link)
			})
		})
	)
}