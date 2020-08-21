import os
import sys
import re
import traceback
AbsPathDirFileName = sys.argv[1]
#os.chdir("C:\\Program Files\\簡轉繁\\")
try:
	
	#import System.Monitor
	import DataProcess.簡轉繁
	import FileProcess.FilePathAnalysis
	#import FileProcess.SaveTasksInDir
	#檢測一樣程序
	#ProcessTool = System.Monitor.SameProcess()
	#確認有無更早的一樣的程序名
	#CheckEarlierProcess = ProcessTool.HasEarlierProcess()
	#簡轉繁工具
	簡轉繁 = DataProcess.簡轉繁.Main()
	#任務存取資料夾
	#TasksSaveDir = os.path.dirname(sys.executable)+os.sep+"名稱簡轉繁TasksDir"
	#任務存取工具
	#SaveTasksTool = FileProcess.SaveTasksInDir.Main(
	#	TasksSaveDir = TasksSaveDir)
	
	#找名稱 在最後一個Slash之後~最後
	FindNamePattern = "(?P<AbsPath>.*\\"+os.sep+\
				")(?P<FindFileName>[^\\"+os.sep+"]*?$)"

	
	#if(CheckEarlierProcess):
	#	SaveTasksTool.SaveTask( SaveContont = AbsPathDirFileName)
	#else:
	#ReadTaskGenerator = SaveTasksTool.ReadTask()
	

	FindNamePatternObj = re.search(
				pattern = FindNamePattern, 
				string = AbsPathDirFileName)


	AbsPath = FindNamePatternObj.group("AbsPath")
	DirFileName = FindNamePatternObj.group("FindFileName")

	
	簡轉繁.TransDirFileNameFunc(
		AbsPath = AbsPath,DirFileName = DirFileName)
		#引入下個任務路徑
		#try:
		#	AbsPathDirFileName = next(ReadTaskGenerator)
		#except StopIteration:
		#	break
		#with open(file = AbsPathDirFileName+"-簡轉繁Info.txt",
			#mode = "w",encoding = "UTF-8") as InfoTxt:
			#InfoTxt.write(AbsPath+"\n")
			#InfoTxt.write(DirFileName+"\n")
	


#若轉換出現問題就寫在同資料夾下的記錄
except:
	with open(file = AbsPathDirFileName+"-名稱簡轉繁Error.txt",
		mode = "w",encoding = "UTF-8") as ErrorTxt:
		ErrorTxt.write(traceback.format_exc())
