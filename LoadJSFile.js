LoadJS = function(JSFileUrl){
	
	var LoadJSElement = document.createElement("script");
	LoadJSElement.src = JSFileUrl;
	LoadJSElement.charset = "UTF-8";
	LoadJSElement.language = "javascript";
	LoadJSElement.type = "text/javascript";
	document.head.appendChild(LoadJSElement);
}


LoadJSONP = function(Url){
	var LoadJSONPElement = document.createElement("script");
	LoadJSONPElement.src = Url;
	LoadJSElement.charset = "UTF-8";
	LoadJSElement.language = "javascript";
	LoadJSElement.type = "text/javascript";
	document.head.appendChild(LoadJSONPElement);
	return(LoadJSONPElement)
}
