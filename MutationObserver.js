//建立新的觀察物件
const observerObj = new MutationObserver(
	function(mutationObjs){
		for(const eachMutationObj of mutationObjs){
			//attributes,characterData,childList
			eachMutationObj.type
			//改變的節點
			eachMutationObj.target
			//增加的子節點
			eachMutationObj.addedNodes
			//刪除的子節點
			eachMutationObj.removedNodes
			//增減節點的前一個元素,若不存在回傳null
			eachMutationObj.previousSibling
			//增減節點的後一個元素,若不存在回傳null
			eachMutationObj.nextSibling
			//回傳改變屬性的local name,若沒有屬性改變回傳null
			eachMutationObj.attributeName
			//回傳改變屬性的namespace,若沒有屬性改變回傳null
			eachMutationObj.attributeNamespace
			//attributes:舊的屬性值,characterData:舊的資料,childList:null
			eachMutationObj.oldValue
		}
	}
).observe(
	//監視目標
	nodeTarget,{
		//監視目標節點的子元素的新增和移除
		"childList":true,
		//監視對於目標節點屬性的變更
		"attributes":false,
		//監視對於目標節點文字內容
		"characterData":false,
		//監視對於所有目標節點子系
		"subtree":true,
		//記錄目標節點的上一個屬性值
		"attributeOldValue":false,
		//記錄目標節點的上一個文字資料
		"characterDataOldValue":false,
		//只監視對於特定屬性的變更
		"attributeFilter":[]
	}
)

//childList, attributes, or characterData,三個值起碼要有一個為True,
//若三個都為false,會產生"An invalid or illegal string was specified"錯誤訊息

//回傳 Array of MutationRecords,並清空記錄的MutationRecord
observerObj.takeRecords();

//停止監視
observerObj.disconnect();