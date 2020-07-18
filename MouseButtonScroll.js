// 滑鼠 左鍵拖曳功能 中鍵全螢幕功能
var setMouseButton = (elem,dragGain = 1)=>{

	elem.style.cursor = "grab"
	elem.dataset.dragGain = String(dragGain)

	elem.onmousedown = (event)=>{
		// 確認是滑鼠左鍵
		if(event.button === 0){

			//停止原來的功能
			event.preventDefault()
			event.stopPropagation()

			let elem = event.currentTarget

			//游標顯示為移動狀態
			elem.style.cursor = "grabbing"
			//旗標
			elem.dataset.mouseLeftDownFlag = "1"
			//紀錄按下的滑鼠 網頁位置
			
			elem.dataset.mousePosX = String(event.clientX)
			elem.dataset.mousePosY = String(event.clientY)
		}
		// 當按下中鍵就轉為全螢幕
		else if(event.button === 1){
			event.preventDefault()
			event.stopPropagation()
			toggleFullScreen(document.documentElement)
		}
	}

	elem.onmouseup = (event)=>{
		// 確認是滑鼠左鍵
		if(event.button === 0){
			let elem = event.currentTarget
			elem.dataset.mouseLeftDownFlag = ""
			//回復游標
			elem.style.cursor = "grab"
		}
	}
	elem.onmouseleave = (event)=>{

		let elem = event.currentTarget
		elem.dataset.mouseLeftDownFlag = ""
		//回復游標
		elem.style.cursor = "grab"
	}


	elem.onmousemove = (event)=>{

		let elem = event.currentTarget
		//確認按鍵有按下
		if(elem.dataset.mouseLeftDownFlag){

			//停止原來的功能
			event.preventDefault()
			event.stopPropagation()
			
			var dragGain = Number(elem.dataset.dragGain)
			if(typeof(dragGain)!=="number" || isNaN(dragGain) || dragGain<0){dragGain = 1}


			// 依滑鼠移動而移動
			let scrollMovePos = [
				document.body.scrollLeft+
				(Number(elem.dataset.mousePosX)-event.clientX)*dragGain,
				document.body.scrollTop+
				(Number(elem.dataset.mousePosY)-event.clientY)*dragGain
			]

			elem.dataset.mousePosX = String(event.clientX)
			elem.dataset.mousePosY = String(event.clientY)

			window.scrollTo(...scrollMovePos)
		}
	}
}