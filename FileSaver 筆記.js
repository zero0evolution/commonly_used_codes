// 載入FileSaver
let loadFileSaverElem = loadScriptsFunc("https://cdn.rawgit.com/eligrey/FileSaver.js/e9d941381475b5df8b7d7691013401e171014e89/FileSaver.min.js")

loadFileSaverElem.onload = function(){
	console.log("FileSaver.js載入完成")
	whenFileSaverLoadedFunc()
}
// 使用Blob儲存
var blob = new Blob(
	[contentString1,contentString2],
	{type: "text/plain;charset=utf-8"}
)
saveAs(blob, fileName)
blob.close()
// 使用File儲存
var file = new File(
	[contentString1,contentString2],
	fileName,
	{type: "text/plain;charset=utf-8"}
)
saveAs(file)
file.close()
// 儲存canvas
var canvas = document.getElementById("my-canvas")
ctx = canvas.getContext("2d")
canvas.toBlob(
	function(blob) {
    	saveAs(blob, imgFileName);
	}
)

