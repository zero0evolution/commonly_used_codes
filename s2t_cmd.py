import s2t
import re
import datetime
import io
import time
import os

while(True):
	try:
		file = input("輸入需簡轉繁文字檔案完整路徑:\n")
		s2t.main().textFileTrans(file)
	except Exception as err:
		print(err)