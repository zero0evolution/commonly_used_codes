//讀取css 可能會收到operation is insecure訊息
var classes = document.styleSheets[0].cssRules;
for (var x = 0; x < classes.length; x++) {
	console.log(classes[x].cssText,classes[x].style.cssText);
}

//移除css
document.styleSheets[0].disabled = true;
$('link[title=mystyle]')[0].disabled=true;