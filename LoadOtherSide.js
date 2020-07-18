var LoadOtherSide = function (Url,ExpectToDoWhenReady){

	//code for all new browsers
	var webRequest = new XMLHttpRequest();

	webRequest.onreadystatechange = function(){
		// 4 = "loaded" 200 = OK 304=not modify
		if ((this.readyState===4)&&((this.status===200)||(this.status===304))){
			ExpectToDoWhenReady(this.responseText);

		}
	};
	webRequest.open("GET",Url,true);
	webRequest.send(null);

}