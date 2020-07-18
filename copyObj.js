var copyObjFunc = function (obj) {
	if (obj == null  || typeof(obj) != "object") {return obj}
	let copyObj = obj.constructor()
	for (let attr in obj) {
		if (obj.hasOwnProperty(attr)){
			copyObj[attr] = copyObjFunc(obj[attr])
		}
	}
	return (copyObj)
}