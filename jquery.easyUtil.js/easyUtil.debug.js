//  ========== 
//  = debugUtil copyright qy = 
//  ========== 
define(function(require,exports,module){
	function log (msg,flag){
		//日志开关
		if (flag) {
			if(typeof console == "object"){
				console.log(msg);
			}else if (typeof opera == "object") {
				opera.postError(msg);
			} else if(typeof java == "object" && typeof java.lang == "object"){
				java.lang.System.out.println(msg);
			}
		}
	};
	
	function assert(condition,msg){
		if (!condition) {
			throw new Error(msg);
		}	
	}
	
	module.exports = {
		log : log,
		assert : assert
	}
});
