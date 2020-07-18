function drag(evt) 
{
   
	evt = evt || window.event;
	if (document.all && evt.button != 1) {
		return false;
	}
		
	oX = 2 * document.documentElement.scrollLeft;
	cX = document.documentElement.scrollLeft - evt.screenX;
	oY = 2 * document.documentElement.scrollTop;
	cY = document.documentElement.scrollTop - evt.screenY;	
	if (cuImg.addEventListener) {
		cuImg.addEventListener("mousemove", moveHandler, true);
		cuImg.addEventListener("mouseup", upHandler, true);
	} else if (cuImg.attachEvent) {
		cuImg.setCapture( );
		cuImg.attachEvent("onmousemove", moveHandler);
		cuImg.attachEvent("onmouseup", upHandler);
		cuImg.attachEvent("onlosecapture", upHandler);
	} else {
		var oldmovehandler = cuImg.onmousemove;
		var olduphandler = cuImg.onmouseup;
		cuImg.onmousemove = moveHandler;
		cuImg.onmouseup = upHandler;
	}	
	if (evt.stopPropagation) evt.stopPropagation( );
	else evt.cancelBubble = true;	
	if (evt.preventDefault) evt.preventDefault( );
	else evt.returnValue = false;	
	if (evt.stopPropagation) evt.stopPropagation( );
	else evt.cancelBubble = true;	


	function moveHandler(evt) {
		mX = evt.screenX + cX;
		mY = evt.screenY + cY;
		window.scrollTo(oX - mX, oY - mY);		
		if (evt.stopPropagation) evt.stopPropagation( );
		else evt.cancelBubble = true;
	}	
	function upHandler(evt) {
		cuImg.style.cursor = "pointer";		
		if (cuImg.removeEventListener) {
			cuImg.removeEventListener("mouseup", upHandler, true);
			cuImg.removeEventListener("mousemove", moveHandler, true);
		} else if (cuImg.detachEvent) {
			cuImg.detachEvent("onlosecapture", upHandler);
			cuImg.detachEvent("onmouseup", upHandler);
			cuImg.detachEvent("onmousemove", moveHandler);
			cuImg.releaseCapture( );
		} else {
			cuImg.onmouseup = olduphandler;
			cuImg.onmousemove = oldmovehandler;
		}
		if (evt.stopPropagation) evt.stopPropagation( );
		else evt.cancelBubble = true;
	}
}