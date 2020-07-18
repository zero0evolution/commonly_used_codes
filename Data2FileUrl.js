//type:'text/plain;charset=utf-8;'

var Data2FileUrl = function(Data,Type){
	var DataAsBlob = new Blob(
		[Data],
		{type:Type});
	if (window.webkitURL != null){
		return(window.webkitURL.createObjectURL(DataAsBlob));
	}
	else{
		return(window.URL.createObjectURL(DataAsBlob));
	}
}