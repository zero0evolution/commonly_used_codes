
import re
import datetime
import io
import time
import os
class main():
	def __init__(self):
		self.path = os.path.dirname(os.path.abspath(__file__))+os.sep
		self.load()
		

	def load(self):

		T1 = datetime.datetime.now()
		#讀取所有簡轉繁字庫
		self.詞典 = dict()

		#建立詞典 self.詞典[簡體詞第一字][詞長度][簡體詞] = 繁體詞
		with open(file = self.path + "簡轉繁_詞.txt",mode = 'rt',encoding = "UTF-8") as txt:

			for eachPhrase in txt:
				簡體詞,繁體詞 = (eachPhrase.strip()).split(",")
				詞長度 = len(簡體詞)
				
				if(簡體詞[0] not in self.詞典.keys()):
					self.詞典[簡體詞[0]] = dict()

				if(詞長度 not in self.詞典[簡體詞[0]]):
					self.詞典[簡體詞[0]][詞長度] = dict()

				self.詞典[簡體詞[0]][詞長度][簡體詞] = 繁體詞

		self.字典 = dict()
		#建立字典 self.字典[簡體字] = 繁體字
		with open(self.path + "簡轉繁_字.txt",mode = 'rt',encoding = "UTF-8") as txt:
			for eachWord in txt:
				簡體字,繁體字 = (eachWord.strip()).split(",")
				self.字典[簡體字] = 繁體字
	
		T2 = datetime.datetime.now()
		loadDictTime = (T2-T1).total_seconds()
		print("載入繁簡對應表花費時間:"+str(loadDictTime)+" sec")

	def strTrans(self,輸入):
		'''字串簡轉繁 都是Unicode
		先轉字 再轉詞'''

		#字串串流建立
		with io.StringIO() as stringIO:
			#分解每一個字處理
			for 字 in 輸入:
				try:
					stringIO.write(self.字典[字])
				except KeyError:
					stringIO.write(字)
					continue

			字串 = stringIO.getvalue()


		with io.StringIO() as stringIO:
			i = 0
			while(i<len(字串)):
				
				第一字 = 字串[i]

				try:
					self.詞典[第一字]
				except KeyError:
					stringIO.write(第一字)
					i+=1
					continue


				所有詞長度 = sorted(self.詞典[第一字].keys(),reverse = True)


				changeFlag = False
				for 詞長度 in 所有詞長度:
					字串片段 = 字串[i:i+詞長度]
					try:
						繁體詞 = self.詞典[第一字][詞長度][字串片段]
					except KeyError:
						continue

					stringIO.write(繁體詞)
					changeFlag = True
					i+=詞長度
					break
				

				if(not changeFlag):
					stringIO.write(第一字)
					i+=1

			輸出 = stringIO.getvalue()

		return(輸出)

	def textFileTrans(self,檔名,編碼 = "UTF-8",overlap = False):
		'''將指定的文字文件簡轉繁'''

		if(not overlap):
			# 新檔名 = re.sub(
			# 	string = 檔名,
			# 	pattern = r"^(.*)(\..*?)?$",
			# 	flags = re.I,
			# 	repl = lambda obj:obj.group(1)+"-繁"+obj.group(2))
			新檔名 = 檔名+".-繁.txt"
		else:
			新檔名 = 檔名

		string = ""
		newString = ""
		#讀取文字檔案
		with open(file = 檔名,mode = "rt",encoding = 編碼) as fileObj:
			
			string = fileObj.read()
			#將單行 修改成繁體 
			newString = self.strTrans(string)


		with open(file = 新檔名,mode = "wt",encoding = 編碼) as fileObj:
			fileObj.write(newString)


