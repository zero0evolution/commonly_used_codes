import os,re

def change_txts_encode_dir(path,origin_encode,target_encode):
	for (root,dirs,files) in os.walk(path):

		for file in files:

			if(re.search(string = file,pattern = r"\.txt$",flags = re.I)):

				txtpath = root+os.sep+file

				txt_content = ""

				with open(txtpath,mode = "rt+",encoding = origin_encode) as fileObj:
					txt_content = fileObj.read()

				with open(txtpath,mode = "wt+",encoding = target_encode) as fileObj:
					fileObj.write(txt_content)


