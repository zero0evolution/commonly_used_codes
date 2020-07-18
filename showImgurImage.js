var getImgurEmbedIFrame = function(code){
	// <blockquote class="imgur-embed-pub" lang="en" data-id="a/hb5hw"><a href="//imgur.com/hb5hw"></a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>

	let newElem = document.createElement("iframe")

	newElem.id = "imgur-embed-iframe-pub-a-"+code

	newElem.classList.add("imgur-embed-iframe-pub")
	// imgur-embed-iframe-pub-a-hb5hw-true-540
	newElem.style.maxHeight = "100vh"
	newElem.style.height = "auto"
	newElem.style.maxWidth = "100vw"
	newElem.style.width = "auto"

	newElem.src = "https://imgur.com/a/"+code+"/embed?pub=true"
	// "https://imgur.com/a/hb5hw/embed?pub=true&ref=https%3A%2F%2Fwww.ptt.cc%2Fbbs%2Fgossiping%2FM.1505930100.A.5C5.html&w=540"

	return(newElem)

	// let allCode = '<blockquote class="imgur-embed-pub" lang="en" data-id="a/'+code+'"><a href="//imgur.com/'+code+'"></a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>'

	// return(allCode)
}
	

var linkElems = document.getElementsByTagName("a")
for(let i = 0;i<linkElems.length;i++){
	let imgurImgLinkMatchObj = linkElems[i].href.match(/^https?\:\/\/imgur.com\/a\/(\w+)$/)

	if(imgurImgLinkMatchObj){
		let imgurCode = imgurImgLinkMatchObj[1]
		let imgurEmbedIFrame = getImgurEmbedIFrame(imgurCode)


		let parentElem = linkElems[i].parentElement

		let nextElem = linkElems[i].nextSibling

		let newNode = document.createElement("div")
		if(nextElem){
			parentElem.insertBefore(imgurEmbedIFrame,nextElem)
		}
		else{
			parentElem.appendChild(imgurEmbedIFrame)
		}
	}
}