//宣告要求
var requestObj = new XMLHttpRequest()

requestObj.onreadystatechange = function() {
	if(this.readyState===this.DONE && this.status===200) {
		//頁面載入成功後
		this.responseText;
	}
}

requestObj.open("GET",RequestURL,true)
requestObj.send()

// test

/*var requestObj = new XMLHttpRequest()

requestObj.onreadystatechange = function() {
	if(this.readyState===this.DONE && this.status===200) {
		
		console.log(this.responseText);
	}
}

requestObj.open("POST","https://www.google.com",true)
requestObj.send()*/

// 下載圖片資料
let requestObj = new XMLHttpRequest()
requestObj.open("GET", imgLink, true)
requestObj.responseType = "arraybuffer"

requestObj.onreadystatechange = function() {
	if(this.readyState===this.DONE && this.status===200) {
		this.response
		// let blobObj = new Blob([this.response], {type: "image/png"})
	}
}

requestObj.send()