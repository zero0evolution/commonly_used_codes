
// element fullscreen request
function toggleFullScreen(elem) {

	if (((document.fullScreenElement !== undefined) && (document.fullScreenElement === null)) || ((document.msFullscreenElement !== undefined) && (document.msFullscreenElement === null)) || ((document.mozFullScreen !== undefined) && (!document.mozFullScreen)) || ((document.webkitIsFullScreen !== undefined) && (!document.webkitIsFullScreen))) {

		if (elem.requestFullScreen) {
			elem.requestFullScreen()
		} 
		else if (elem.mozRequestFullScreen) {
			elem.mozRequestFullScreen()
		} 
		else if (elem.webkitRequestFullScreen) {
			elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
		} 
		else if (elem.msRequestFullscreen) {
			elem.msRequestFullscreen()
		}
	} 
	else {
		if (document.cancelFullScreen) {
			document.cancelFullScreen()
		} 
		else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen()
		} 
		else if (document.webkitCancelFullScreen) {
			document.webkitCancelFullScreen()
		} 
		else if (document.msExitFullscreen) {
			document.msExitFullscreen()
		}
	}
}

// 設定在targetElem 上按中鍵全螢幕功能
targetElem.onmousedown = function(event){
	// console.log("detect button click",event.button,event.which)
	if(event.button === 1){
		event.preventDefault()

		toggleFullScreen(document.documentElement)
	}
}