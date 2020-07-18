var createSideButton = function(innerText,direction){
	// direction為left or right

	let elem = document.createElement("button")
	elem.innerText = innerText

	// 
	elem.style.setProperty("color","white")
	elem.style.setProperty("background-color","black")

	elem.style.setProperty("font-size","26px")
	let height = 40
	elem.style.setProperty("height",String(height)+"px")
	

	// 設定位置
	elem.zIndex = 2
	elem.style.setProperty("position","fixed")
	elem.style.setProperty("top","50%")
	elem.style.setProperty("bottom","50%")
	elem.style.setProperty("float",direction)

	document.body.appendChild(elem)

	// 設定靠左邊
	let elemWidthStr = getComputedStyle(elem).width
	// console.log(elemWidthStr)
	let offsetStr = elemWidthStr.replace(
		/^\d+/,function(matchStr){
			return(String((-Number(matchStr)+height)/2))
		}
	)
	// console.log(direction,offsetStr)
	elem.style.setProperty(direction,offsetStr)

	// 設定轉90度
	let rotateAngle = {
		left:"90deg",
		right:"-90deg",
	}

	elem.style.setProperty("transform","rotate("+rotateAngle[direction]+")")
	return(elem)
}
var testButton = createSideButton("show left col","left")