path = r"D:\SteamLibrary\steamapps\common\Chef\chefgame_Data\StreamingAssets\XML\TextStrings\TextStrings_zh"

import s2t
import os,re

strTrans = s2t.main().strTrans

def replfunc(matchObj):
	match = matchObj.group(1)
	match = strTrans(match)
	# print(repr(match))
	return("<String>"+ match +"</String>")


for file in os.listdir(path):
	# print(repr(path+os.sep+file))
	fullpath = path+os.sep+file
	if(not os.path.isfile(fullpath)):
		continue
		
	text = ""
	with open(fullpath,encoding = "UTF-8",mode = "rt+") as txtObj:
		text = txtObj.read()
		text = re.sub(pattern = r"<String>(.*?)</String>",repl = replfunc, string = text,flags=re.M|re.S)

	# newPath = path+os.sep+re.sub(string = file,pattern = r"\.xml$",repl = "_test.xml")
	with open(fullpath,encoding = "UTF-8",mode = "wt+") as txtObj:
		txtObj.write(text)