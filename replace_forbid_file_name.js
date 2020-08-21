"use strict"
console.log("load replace_forbid_file_name.js")
function replace_forbid_file_name(string){
	// 
	string = string
		.replace(/\?/mg,"？")
		.replace(/\:/mg,"：")
		.replace(/\</mg,"〈")
		.replace(/\>/mg,"〉")
		.replace(/\|/mg,"｜")
		.replace(/\"/mg,"”")
		.replace(/\//mg,"／")
		.replace(/\\/mg,"＼")
		.replace(/\*/mg,"＊")
		.replace(/^\s+/mg,"")
		.replace(/\s+$/mg,"")
		.replace(/\n+/mg,"")
		.replace(/\r+/mg,"")
	return(string)
}