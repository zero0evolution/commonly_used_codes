"use strict"
async function getHTML(link,encoding="UTF-8"){

	const response = await fetch(link).then(
		(response)=>{return(response)}
	)

	const arrayBuffer = await response.arrayBuffer().then(
		(arrayBuffer)=>{return(arrayBuffer)}
	)

	const htmlCode = new TextDecoder(encoding).decode(arrayBuffer)

	return(htmlCode)
}