let treeWalker = document.createTreeWalker(
	//最上層節點
	rootNode, 

	// whatToShow:決定選擇的節點屬性
	(
		NodeFilter.SHOW_ALL|
		NodeFilter.SHOW_COMMENT|
		NodeFilter.SHOW_DOCUMENT|
		NodeFilter.SHOW_DOCUMENT_FRAGMENT|
		NodeFilter.SHOW_DOCUMENT_TYPE|
		NodeFilter.SHOW_ELEMENT|
		NodeFilter.SHOW_PROCESSING_INSTRUCTION|
		NodeFilter.SHOW_TEXT
	), 

	// filter:回傳值決定是否跳過節點(可不使用)
	{ 
		acceptNode: function(node) { 
			return (NodeFilter.FILTER_ACCEPT) 
			// NodeFilter.FILTER_ACCEPT
			// NodeFilter.FILTER_REJECT
			// NodeFilter.FILTER_SKIP
		} 
	}
)


treeWalker.root
treeWalker.whatToShow 
treeWalker.filter

// 現在節點
treeWalker.currentNode

// 改變現在選定的節點
treeWalker.parentNode()
treeWalker.firstChild()
treeWalker.lastChild()
treeWalker.previousSibling()
treeWalker.nextSibling()

// 改變到前/下個節點
treeWalker.previousNode()
treeWalker.nextNode()


let node = treeWalker.currentNode
while(node){
	// do

	node = treeWalker.nextNode()
}