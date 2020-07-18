/* Download an Image */
function AddDownloadNodeFunc(Image,SaveName) {
    var NewLinkNode = document.createElement("a");
    NewLinkNode.href = Image.src;
    NewLinkNode.download = SaveName;
    //不顯示
    //NewLinkNode.style.display = "none";
    //新增按鍵動作事件
    var MouseClickEvent = new MouseEvent(
        "click",
        {
            "view": window,
            "bubbles": true,
            "cancelable": true
        }
    );
    //新增節點
    document.body.appendChild(NewLinkNode);
    //程式模擬按鍵動作
    NewLinkNode.dispatchEvent(MouseClickEvent);
    //移除節點
    //document.body.removeChild(NewLinkNode);

    console.log("Downloading...");
}

/* 
Download all images in 'Images'. 
Optionaly filter them by extension (e.g. "jpg") and/or 
*/
function DownloadAllFunc(FilesUrlArray) {
    //確認Images是Array
    if(Object.prototype.toString.call(FilesUrlArray) === '[object Array]' ) {
        /* (Try to) download the images */
        for (var i = 0; i < FilesUrlArray.length; i++) {
            //console.log(Donwload:);
            //console.log(FilesUrlArray[i].src);
            AddDownloadNodeFunc(FilesUrlArray[i]);
        }
    }
        
}