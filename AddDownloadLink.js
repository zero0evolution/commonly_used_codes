var AddDownloadLink = function(Url,ShowText,SaveName){
	var DownloadLinkNode = document.createElement("a");

	DownloadLinkNode.innerHTML = ShowText;
	DownloadLinkNode.href = Url;
	DownloadLinkNode.download = SaveName;
	DownloadLinkNode.target = "_blank";

	document.body.insertBefore(
		DownloadLinkNode,
		document.body.childNodes[0]);
	//接著換行
	document.body.insertBefore(
		document.createElement('br'),
		document.body.childNodes[1]);

	return(DownloadLinkNode)
}
