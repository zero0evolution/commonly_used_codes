function checkScrollToBottom(distance = 0){
	// if scroll height + window height >= total height
	const scrollPlusWindowHeight = document.documentElement.scrollTop + window.innerHeight
	const totalHeight = document.documentElement.offsetHeight
	// console.log("total height:",totalHeight)
	return(scrollPlusWindowHeight >= (totalHeight - distance))
}

function activeFuncWhenScrollToBottom(targetFunction,distance){
	let targetFunctionRunFlag = false

	window.addEventListener('scroll',async (event)=>{
		if(!targetFunctionRunFlag){
			if(checkScrollToBottom(distance)){
				targetFunctionRunFlag = true
				await targetFunction()
				targetFunctionRunFlag = false
			}
		}
	})
}