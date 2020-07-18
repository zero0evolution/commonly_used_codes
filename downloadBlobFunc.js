var downloadBlobFunc = (fileName,blobObj)=>{
	let blobObjUrl = URL.createObjectURL(blobObj)

	var linkElem = document.createElement('a')
	linkElem.style.display = "none"
	
	linkElem.href = blobObjUrl
	linkElem.download = fileName
	document.body.appendChild(linkElem)
	
	linkElem.onclick = (event)=>{
		let linkElem = event.target
		setTimeout(
			(targetElem)=>{
				URL.revokeObjectURL(targetElem.href)
				targetElem.remove()
			},3000,linkElem
		)
	}
	linkElem.click()

	return(blobObjUrl)
}

var downloadTextFunc = (fileName,text)=>{
	let blobObj = new Blob(
		[text], 
		{"type": "text/plain;charset=utf-8"}
	)
	downloadBlobFunc(fileName,blobObj)
}