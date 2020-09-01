'use strict'
function activeFuncWhenScroll(targetFunction){
	let targetFunctionRunFlag = false

	window.addEventListener('scroll',async (event)=>{
		if(!targetFunctionRunFlag){
			targetFunctionRunFlag = true
			await targetFunction()
			targetFunctionRunFlag = false
		}
	})
}