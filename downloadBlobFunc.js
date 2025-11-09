"use strict"
function downloadBlobFunc(fileName,blobObj){
	const blobObjUrl = URL.createObjectURL(blobObj)

	const linkElem = document.createElement('a')
	linkElem.style.display = "none"
	
	linkElem.href = blobObjUrl
	linkElem.download = fileName
	document.body.appendChild(linkElem)
	
	linkElem.addEventListener("click",function(event){
		const linkElem = event.currentTarget
		setTimeout(
			(targetElem)=>{
				URL.revokeObjectURL(targetElem.href)
				targetElem.remove()
			},5000,linkElem
		)
	})

	linkElem.click()

	return(blobObjUrl)
}

function downloadTextFunc(fileName,text){
	let blobObj = new Blob(
		[text], 
		{"type": "text/plain;charset=utf-8"}
	)
	return(downloadBlobFunc(fileName,blobObj))
}