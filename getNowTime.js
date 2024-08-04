function getNowTime(){
	const d = new Date()
	const nowtime = d.getFullYear() + "/"  
								+ (d.getMonth()+1)  + "/" 
								+	d.getDate() + " "
								+ d.getHours() + ":"  
								+ d.getMinutes() + ":" 
								+ d.getSeconds()
	retrun(nowtime)
}
