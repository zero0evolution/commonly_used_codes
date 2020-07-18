var getMouseToElemPos = function(event){
	var mousePos = {x:0,y:0},elemPos = {x:0,y:0}
	var elem = event.target
	//get mouse position on document
	mousePos.x = event.pageX
	mousePos.y = event.pageY
	//get parent element position in document
	do { 
		elemPos.x += elem.offsetLeft
		elemPos.y += elem.offsetTop
		elem = elem.offsetParent
	} while (elem)
	// mouse position minus elem position is mouse position relative to element:
	var mouseToElemPos = {x:(mousePos.x-elemPos.x),y:(mousePos.y-elemPos.y)}
	return(mouseToElemPos)
}