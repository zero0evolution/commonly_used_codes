var getHTML = async(link,encoding="UTF-8")=>{

	let response = await fetch(link).then(
		(response)=>{return(response)}
	)

	let arrayBuffer = await response.arrayBuffer().then(
		(arrayBuffer)=>{return(arrayBuffer)}
	)

	let htmlCode = new TextDecoder(encoding).decode(arrayBuffer)

	return(htmlCode)
}