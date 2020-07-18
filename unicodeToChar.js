var unicodeToChar = (text)=>{
	text = text.replace(/\\u[\dA-F]{4}/gi, 
		(match)=> {
			// 刪掉\u
			match = match.replace(/\\u/g, '')
			// 16進位轉10進位
			match = parseInt(match, 16)
			// 轉字元
			match = String.fromCharCode(match)
			return(match)
		}
	)
	return(text)
}