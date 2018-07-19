define(function(require,exports,module){
	function layer(text,time){
		var ele = document.createElement('div');
		ele.id = new Date().getTime();
		ele.className = "easyUtil-fixedBody easyUtil-layer";
		var content = document.createTextNode(text);
		ele.appendChild(content);
		document.body.appendChild(ele);
		//删除
		/*setTimeout(function(){
			document.body.removeChild(ele);
		},time)*/
	}
	exports.layer = layer;
});