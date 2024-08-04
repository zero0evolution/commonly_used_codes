// 選擇所有元素(包括動態產生的)
function elemDoFunc(css, func, topElem = document.body, waitms = 100){
	if(topElem.matches(css)){
		setTimeout(function(func = func, topElem = topElem){
			func(topElem)
		},waitms,func,topElem)
	}

	const elems = topElem.querySelectorAll(css)
	for(const elem of elems){
		setTimeout(function(func = func, topElem = topElem){
			func(topElem)
		},waitms,func,topElem)
	}

	const observerObj = new MutationObserver(
		(mutationObjs)=>{
			for(const eachMutationObj of mutationObjs){
				for(const addNode of eachMutationObj.addedNodes){
					if(addNode.nodeType === 1){
						setTimeout(function(func = func, topElem = topElem){
							if(addNode.matches(css)){
								func(addNode)
							}
							const elems = addNode.querySelectorAll(css)
							for(const elem of elems){
								func(elem)
							}
						},waitms,func,topElem)
					}
				}
			}
		}
	).observe(
		topElem,
		{
			"childList":true,
			"subtree":true,
		}
	)
}