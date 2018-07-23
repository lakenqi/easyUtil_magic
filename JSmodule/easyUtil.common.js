//  ========== 
//  = common function copyright qy = 
//  ========== 
define(function(require, exports, module) {
	Date.prototype.Format = function(fmt) {
		var o = {
			"M+": this.getMonth() + 1, //月份 
			"d+": this.getDate(), //日 
			"H+": this.getHours(), //小时 
			"m+": this.getMinutes(), //分 
			"s+": this.getSeconds(), //秒 
			"q+": Math.floor((this.getMonth() + 3) / 3), //季度 
			"S": this.getMilliseconds() //毫秒 
		};
		if(/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
		for(var k in o)
			if(new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		return fmt;
	}

	String.prototype.endWith = function(endStr) {
		var d = this.length - endStr.length;
		return(d >= 0 && this.lastIndexOf(endStr) == d)
	}
	
	function formatDate(dateData, style) {
		if(typeof dateData == "object" && typeof style == "string") {
			var datetime = new Date();
			datetime.setTime(dateData.time);
			return datetime.Format(style);
		} else {
			throw new TypeError("参数有误")
		}
	}
	//第一参数是掺入的数字，必须数字类型，第二参数为是否带空格，默认不写则带空格
	function treeNumPart(data, flag) {
		if(typeof data == "number") {
			var num = data,
				num = (num || 0).toString(),
				result = '';
			if(flag) { //
				while(num.length > 3) {
					result = ',' + num.slice(-3) + result;
					num = num.slice(0, num.length - 3);
				}
			} else { //带空格
				while(num.length > 3) {
					result = ',  ' + num.slice(-3) + result;
					num = num.slice(0, num.length - 3);
				}
			}
			if(num) {
				result = num + result;
			}
			return result;
		} else {
			throw new TypeError("第一参数必须为数字类型")
		}
	};

	//日期星期函数
	function getDateWeek(options) {
		//默认参数
		var opt = {
			type: 'week',
			isLog: false
		};
		opt = $.extend(true, {}, opt, options);
		if(opt.isLog) {
			$.log(opt, '输入的参数为');
		}
		//开始执行
		todayDate = new Date();
		date = todayDate.getDate();
		month = todayDate.getMonth() + 1;
		year = todayDate.getYear();
		var dateweek = "";
		if(navigator.appName == "Netscape") {
			dateweek = dateweek + (1900 + year) + "年" + month + "月" + date + "日 ";
		}
		if(navigator.appVersion.indexOf("MSIE") != -1) {
			dateweek = dateweek + year + "年" + month + "月" + date + "日 ";
		}
		//判断类型
		switch(opt.type) {
			case 'week':
				switch(todayDate.getDay()) {
					case 0:
						dateweek += "  星期日";
						break;
					case 1:
						dateweek += "  星期一";
						break;
					case 2:
						dateweek += "  星期二";
						break;
					case 3:
						dateweek += "  星期三";
						break;
					case 4:
						dateweek += "  星期四";
						break;
					case 5:
						dateweek += "  星期五";
						break;
					case 6:
						dateweek += "  星期六";
						break;
				}
				break;
			default:
				break;
		}
		return dateweek;
	}

	module.exports = {
		formatDate : formatDate,
		treeNumPart : treeNumPart,
		getDateWeek :getDateWeek
	}
})