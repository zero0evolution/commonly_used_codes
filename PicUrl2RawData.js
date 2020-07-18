PicUrl2RawData = function(Url,Reffer,ExpectToDoWhenReady){
    var webRequest = new XMLHttpRequest();
    webRequest.open('GET',Url,true);

    // Must include this line - specifies the response type we want
    //webRequest.responseType = 'arraybuffer';
    webRequest.setRequestHeader = ("Reffer",Reffer);
    webRequest.onreadystatechange = function(){
    	if ((this.readyState===4)&&(this.status===200)){
			
			//var DataArray = new Uint8Array(this.response);
			ExpectToDoWhenReady(this.response);

	        // Convert the int array to a binary string
	        // We have to use apply() as we are converting an *array*
	        // and String.fromCharCode() takes one or more single values, not
	        // an array.


	        //var RawData = String.fromCharCode.apply(null,DataArray);
			//ExpectToDoWhenReady(DataArray);


	        // This works!!!

	        //var Base64Data = btoa(RawData);
	        //var dataURL="data:image/jpeg;base64," + Base64Data;
	        //document.getElementById("image").src = dataURL;
		}
	        
    };

    webRequest.send(null);
}




Url = "http://99.1112223333.com/dm13//ok-comic13/Y/YinMengZhiZaoZhe/act_011/dmeden-0024-21202.JPG";

var webRequest = new XMLHttpRequest();


webRequest.setRequestHeader = ("Referer",document.title);
webRequest.setRequestHeader = ("Host","99.1112223333.com");
webRequest.setRequestHeader = (
	"Accept","image/png,image/*;q=0.8,*/*;q=0.5");
webRequest.setRequestHeader = (
	"Accept-Language","zh-TW,en-US;q=0.7,en;q=0.3");
webRequest.setRequestHeader = (
	"Accept-Encoding","gzip, deflate");
webRequest.setRequestHeader = (
	"DNT","1");
webRequest.setRequestHeader = (
	"Connection","keep-alive");
webRequest.setRequestHeader = (
	"User-Agent",
	"Mozilla/5.0 (Windows NT 6.1; WOW64; rv:37.0) Gecko/20100101 Firefox/37.0");

//webRequest.setRequestHeader = (
//	"Access-Control-Allow-Origin","http://99.1112223333.com");

//webRequest.responseType = 'arraybuffer';

webRequest.onreadystatechange = function(){
	console.log(this.response);
}
webRequest.open('GET',Url,true);
webRequest.send();


