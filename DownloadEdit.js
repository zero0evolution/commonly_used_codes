
//記錄原狀態 不選擇狀態下的border-color border-style border-width

//滑鼠在Element上(onmouseenter)的狀態為border-color:red; border-style:dashed; border-width:1px;
//滑鼠移開(onmouseleave)為原狀態 已選擇的話為選擇狀態

//選擇後狀態(onclick)為border-color:red; border-style:solid; border-width:1px;

//再選一次就變回原狀態


var mouseOverEvent = function (evt){
	evt.stopPropagation();
	if(this.dataset.hasSelect != "1"){
		this.style.setProperty("border-style","dashed");
		this.style.setProperty("border-color","red");
		if(this.dataset.noBorder == "1"){
			this.style.setProperty("border-width","1px");
		}
	}
}

//滑鼠離開時 恢復原狀
var mouseOutEvent = function (evt){
	evt.stopPropagation();
	if(this.dataset.hasSelect != "1"){
		this.style.setProperty("border-width",this.dataset.originBorderWidth);
		this.style.setProperty("border-color",this.dataset.originBorderColor);
		this.style.setProperty("border-style",this.dataset.originBorderStyle);
	}
	
}
//滑鼠點擊 標記hasSelect = "1" border實線
//再次點擊就恢復
var mouseClickEvent = function(evt){
	//取消原來的點擊功能
	evt.preventDefault();
	evt.stopPropagation();
	
	

	//回復原來的Border狀態
	if(this.dataset.hasSelect == "1"){
		this.style.setProperty("border-style","dashed");

		//this.addEventListener("mouseover",mouseOverEvent);
		//this.addEventListener("mouseout",mouseOutEvent);

		this.dataset.hasSelect = "0";
		
		this.nextSibling.style.setProperty("visibility","hidden");
	}
	// 選擇 其他 被更改的狀態 未預期的狀態
	else{
		//this.removeEventListener("mouseover",mouseOverEvent);
		//this.removeEventListener("mouseout",mouseOutEvent);

		this.dataset.hasSelect = "1";
		//設定已選取的Border狀態
		this.style.setProperty("border-style","solid");

		if(this.dataset.hasSubWin != "1"){
			createSubWin(this);
		}
		else{
			this.nextSibling.style.setProperty("visibility","visiable");
		}
	}
}

//建立一個新視窗 在此元素之後
var createSubWin = function(elem){
	//設定為單一視窗 position:fixed;
	//設定視窗
	//z-index:999;position:absolute;display:black;top:auto;visibility:visiable,hidden;

	var setStyleWindow = document.createElement("div");
	setStyleWindow.style.setProperty("z-index","999");
	setStyleWindow.style.setProperty("position","fixed");
	setStyleWindow.style.setProperty("display","black");
	setStyleWindow.style.setProperty("visibility","visiable");
	setStyleWindow.style.setProperty("border","1px solid white");
	setStyleWindow.style.setProperty("background-color","rgba(0,0,0,0.5)");
	setStyleWindow.style.setProperty("top","0px");
	setStyleWindow.style.setProperty("bottom","auto");
	setStyleWindow.style.setProperty("left","0px");
	setStyleWindow.style.setProperty("right","auto");

	setStyleWindow.style.setProperty("align-items","center");
	//顯示內容
	var subWindowContent = document.createTextNode("first line!!!!!!!!!");
	subWin.appendChild(subWindowContent);
	//將新視窗放到該元素之後
	elem.parentElement.insertBefore(subWin,elem.nextSibling);
}

var elemStyleCount = 0;
var allElems = document.body.getElementsByTagName("*");

for (i = 0; i < allElems.length; i++) {
    
    //過濾掉沒有顯示的元素
    
    if(!((allElems[i].nodeName)&&(allElems[i].tagName))){
		continue
	}
	if((allElems[i].nodeName == "script")||(allElems[i].tagName == "script")){
    	continue
    }
    elemStyle = getComputedStyle(allElems[i]);
    if(elemStyle.display == "none"){
    	continue
    }

    elemStyleCount++;

    //設定初始:未選取的狀態 
	allElems[i].dataset.hasSelect = "0";
	
	//記錄Border原本狀態

	findWidthObj = elemStyle.borderWidth.match(/(\d+)px/);
	if(findWidthObj){
		if(Number(findWidthObj[1])<1){
			allElems[i].dataset.noBorder = "1";
		}
	}
	else{
		allElems[i].dataset.noBorder = "1";
	}
	allElems[i].dataset.originBorderWidth = elemStyle.getPropertyValue("border-width");
	
	
	allElems[i].dataset.originBorderColor = elemStyle.getPropertyValue("border-color");
	allElems[i].dataset.originBorderStyle = elemStyle.getPropertyValue("border-style");

	//使用mouseenter?
    allElems[i].addEventListener("mouseover",mouseOverEvent);
    //使用mouseleave?
    allElems[i].addEventListener("mouseout",mouseOutEvent);

	allElems[i].addEventListener("click",mouseClickEvent);

	//設定初始:沒有子視窗
	allElems[i].dataset.hasSubWin = "0";
	
}
console.log(elemStyleCount);

	