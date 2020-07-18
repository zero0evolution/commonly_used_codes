var zipObj = new JSZip()
//建立檔案 名稱 資料
zipObj.file("Hello.txt", "Hello World\n")
//建立資料夾
var img = zipObj.folder("images")
// create a file and a folder
zipObj.file("nested/hello.txt", "Hello World\n")
//建立檔案 名稱 資料 型態
img.file("smile.gif", imgData, {base64: true})
//得到壓縮檔案

zipObj.generateAsync({type:"blob"}).then(
	function(content) {
		// see FileSaver.js
		saveAs(content, "example.zip")
	}
)