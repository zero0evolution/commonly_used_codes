var fetchImageData = async function(imgElem){

	var response = await fetch(imgElem.src).then(
		function(response){return(response)}
	)
	var arrayBuffer = await response.arrayBuffer().then(
		function(arrayBuffer){return(arrayBuffer)}
	)
	var byteArray = new Uint8Array(arrayBuffer)
	var binaryStrArray = new Array(byteArray.length)
	for(let i in byteArray){
		binaryStrArray[i] = String.fromCharCode(byteArray[i])
	}
	var data = binaryStrArray.join('')
	var base64 = btoa(data)

	var imgType = "png"
	var imgData = "data:image/"+imgType+";base64,"+base64
	
	imgElem.src = imgData
}


// imgUrl to imgData
var imgUrlToData = function(imgUrl){
	return(
		new Promise(
			function(resolve,reject){
				if(imgUrl.match(/^data\:image/)){
					return(imgUrl)
				}
				var tailMatchObj = imgUrl.match(/[^\/]+?$/)
				if(tailMatchObj){
					var fileNameMatchObj = tailMatchObj[0].match(/.*?(?=\?|$)/)
					if(fileNameMatchObj){
						var subFileNameMatchObj = fileNameMatchObj[0].match(/\.(\w{1,5})$/)
						if(subFileNameMatchObj){
							var imgType = subFileNameMatchObj[1]
							// console.log("imgType:",imgType)
							// console.log("imgUrl:",imgUrl)
							var requestObj = new XMLHttpRequest();
							requestObj.open("GET", imgUrl, true)
							requestObj.responseType = "arraybuffer"

							requestObj.onload = function() {
								// this.readyState===this.DONE && 
								if(this.status===200) {
									var byteArray = new Uint8Array(this.response)
									var binaryStrArray = new Array(byteArray.length)
									for(let i in byteArray){
										binaryStrArray[i] = String.fromCharCode(byteArray[i])
									}
									var data = binaryStrArray.join('')
									var base64 = btoa(data)

									var imgData = "data:image/"+imgType+";base64,"+base64
									// console.log("imgData:",imgData)
									resolve(imgData)
								}
								else{
									reject(
										Error(
											'Image did not load in.'+
											"readyState:"+this.readyState+", "+
											"status:"+this.status
										)
									)
								}
							}
							requestObj.onerror = function(){
								reject(Error('network error. url:'+this.responseURL))
							}

							requestObj.send()
						}
						else{reject(Error("no image sub file name"))}
					}
					else{reject(Error("no image sub file name"))}
				}
				else{reject(Error("no image sub file name"))}
			}
		)
	)	
}


function getBase64Image(img) {
	var canvas = document.createElement("canvas");
	canvas.width = img.width;
	canvas.height = img.height;
	var ctx = canvas.getContext("2d");
	ctx.drawImage(img, 0, 0);
	var dataURL = canvas.toDataURL("image/png");
	return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}
