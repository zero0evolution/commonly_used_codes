import traceback
import sys
import os
import re
#"C:\Python\python.exe" "C:\Program Files\簡轉繁\Explorer_文件簡轉繁.py" "%1"
absPathFileName = sys.argv[1]


#轉到py程式目錄
#os.chdir("C:\\Program Files\\簡轉繁\\")
try:
	import DataProcess.簡轉繁
	import DataProcess.StringDecode
	import FileProcess.FilePathAnalysis

	#讀取文件
	with open(file = absPathFileName,mode = "rb") as fileObj:
		RawContentBytes = fileObj.read()
	#Bytes解碼
	stringDecodeTool = DataProcess.StringDecode.Main()
	encodeContentString = stringDecodeTool.StringDecodeFunc(
		InputBytes = RawContentBytes)

	
	#啟動簡轉繁程序 轉換好的內容另存檔名
	簡轉繁Tool = DataProcess.簡轉繁.Main()
	簡轉繁Tool.TransTextFileFunc(
		absPathFileName = absPathFileName,
		TargetEncoding = stringDecodeTool.InputEncoding)
	#
	
except:
	with open(file = absPathFileName+"-文件簡轉繁Error.fileObj",
		mode = "w",encoding = "UTF-8") as ErrorfileObj:
		ErrorfileObj.write(traceback.format_exc())