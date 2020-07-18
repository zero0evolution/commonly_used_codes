
// 若圖片位址非此網域無效 
function getImgBrightness(imageSrc,callback) {
	var img = document.createElement("img")
	img.src = imageSrc
	img.style.display = "none"
	document.body.appendChild(img)


	img.onload = function() {
		// create canvas
		var canvas = document.createElement("canvas")
		canvas.width = this.width
		canvas.height = this.height

		var ctx = canvas.getContext("2d")
		ctx.drawImage(this,0,0)

		var imageData = ctx.getImageData(0,0,canvas.width,canvas.height)
		
		var allPixelBrightnessSum = 0

		var i=0
		while(i<imageData.data.length){
			var rgb = imageData.data.slice(i,i+3)
			var pixelBrightness = (Math.max(...rgb)+Math.min(...rgb))/2
			allPixelBrightnessSum += pixelBrightness

			i+=4
		}

		var avgBrightness = Math.round(
			allPixelBrightnessSum / (this.width*this.height))

		callback(avgBrightness)
		// 刪掉自己
		this.remove()
	}
}