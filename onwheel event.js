elem.onwheel = function(event){
	// console.log(event.deltaY,event.deltaMode)
	if(event.deltaY<0){
		// 往上滾時做的動作
	}
	else{
		// 往下滾時做的動作
	}
}

// WheelEvent.deltaY Read only
//     Returns a double representing the vertical scroll amount.
//     滑鼠滾輪往上 WheelEvent.deltaY為+3
//     滑鼠滾輪往下 WheelEvent.deltaY為-3

// WheelEvent.deltaZ Read only
//     Returns a double representing the scroll amount for the z-axis.

// WheelEvent.deltaMode Read only
//     Returns an unsigned long representing the unit of the delta values scroll amount. Permitted values are:
//     Constant 	Value 	Description
//     DOM_DELTA_PIXEL 	0x00 	The delta values are specified in pixels.
//     DOM_DELTA_LINE 	0x01 	The delta values are specified in lines.
//     DOM_DELTA_PAGE 	0x02 	The delta values are specified in pages.