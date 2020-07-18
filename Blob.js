var aBlob = new Blob( array, options );

// array 可以是一個由 ArrayBuffer、ArrayBufferView、Blob 或 DOMString 組成的 Array 物件，或是上述多種型別物件的混合陣列。這個陣列將會被放進新建立的 Blob 物件當中。

// options 是選擇性的 BlobPropertyBag 字典物件，有以下兩個指定的屬性：

		// type 屬性，預設值為空字串 ""，表示將被放進 Blob 物件的陣列內容之 MIME 類型。
		// endings 屬性，表示包含 \n 換行字元的字串要如何輸出，預設值為字串 "transparent"。此屬性值可為："native"，代表換行字元會被轉為目前作業系統的換行字元編碼。也可以是 "transparent"，代表保留 Blob 物件中資料的換行字元。


Blob.close()
// 關閉 blob 物件，可能會釋放底層的資源。
// 關閉就不能讀取

Blob.isClosed
// return Boolean,read only
// 確認是否已關閉

Blob.size
// read only
// 以 byte 為單位顯示 Blob 物件大小。

Blob.type
// Read only
// Blob 物件中資料的型態，以 MIME 類型的字串表示。若型態為未知，則為空字串。

Blob.slice([start[, end[, contentType]]])
// 回傳一個包含當前 Blob 物件之指定資料範圍（byte）內容的新 Blob 物件。


// 從 Blob 取出資料
// 從 Blob 讀取資料的唯一方式就是使用 FileReader。
var reader = new FileReader()
reader.addEventListener("loadend", function() {
	 // reader.result contains the contents of blob as a typed array
})
reader.readAsArrayBuffer(blob)



// File
// File 物件是一種特殊的 Blob,可被用在任何接受 Blob 物件的地方。

File.lastModifiedDate
// Read only
// 最後修改時間

File.name
// Read only
// 檔案名

// File 繼承了 Blob 介面的屬性：




var downloadBlobFunc = (blobObj,fileName)=>{
	let blobObjUrl = URL.createObjectURL(blobObj)

	// download
	var a = document.createElement('a')
	a.style.display = "none"
	
	a.href = blobObjUrl
	a.download = filename
	document.body.appendChild(a)
	
	a.onload = function(event){
		window.URL.revokeObjectURL(event.target.href)
		event.target.remove()
	}
	a.click()
}
// 使用blob下載資料
var downloadFunc = function(data,filename){
	// download
	var a = document.createElement('a')
	a.style.display = "none"
	
	var blobObj = new Blob([data], {type: "text/plain;charset=utf-8"})
	var url = window.URL.createObjectURL(blobObj)
	a.href = url
	a.download = filename
	document.body.appendChild(a)
	a.click()
	a.onload = function(event){
		window.URL.revokeObjectURL(event.target.href)
		document.body.removeChild(event.target)
	}
}