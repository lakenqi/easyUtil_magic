# jquery.drag.tag-ul
/**
*用于ul li标签的拖拽，需引入jquery.easyUtil.js</br>
*1.功能可设置拖拽区域，拖拽样式，拖拽限制，拖拽回调函数，
*2.可自动判断是否拖动成功，如果未发生实质拖拽（如点击了标签，但没有拖动）或拖拽失败（移动到非可移动区域），则不会触发mouseupFn的回到函数
*3.调用方式，引入该js插件，在jquery初始化过程中加入:</br>
	$(document).ready(function(){</br>
		$.dragUtil(option);</br>
	});</br>
	即可完成功能。</br>
*3.参数列表如下，或在项目中引入 $.dragUtil()，可在控制台看到日志打印参数。</br>
 var option = {</br>
					containerClassName: '可拖拽区域的类名，只能是类名，必填，格式为‘.className’',  //only for className</br>
					sourceArea: {</br>
						name: '源区域的idName/className，必填', //drag elemets source area for className idName</br>
						type: '源区域的类型：id/class，必填', //source area attr for 'class', 'id'</br>
					},</br>
					targetArea: {</br>
						name: '目标区域：idName/className，必填', //drag elements target area for className idName </br>
						type: '目标区域的类型：id/class，必填', //target area attr for 'class', 'id'</br>
						isLimitedMove: '是否有拖动数量限制，默认false，当为true时，以下两项值必填', //if have,for some fileds, have some tagnums limit</br>
						limitedMaxNums: ['拖动数量最大数，数组形式，如果有超过1个值，需要与limitedIdNames一一对应'], //if have, tag max nums</br>
						limitedIdNames: ['受限制的拖动目标区域idName,数组形式,可共用一个limitedMaxNums值，如果有多个，需要一一对应'], //if have,drag elements target fileds idName, for specail thing for className id or tagName</br>
					},</br>
					CssForDrag: {</br>
						limitedClass: '限制拖动的Css类名称，isLimitedMove为true时，必填', //if have, limited CSS</br>
						targetAreaMoveClass: '拖拽时目标区域Css类样式，默认无', //if have, target area backgroundColor when moving the tags</br>
						targetAreaNormalClass: '拖拽结束目标区域Css类样式，默认恢复原样', //if have,target area backgroundColor when move over</br>
						movingTagClass: '从源区域拖拽时的标签样式，选填', //if have, when a tag is moving, its CSS	</br>			
					},</br>
					callbackFn: {</br>
						mousedownFn: "function() {鼠标按下时的回调函数，选填}",</br>
						mousemoveFn: "function() {鼠标拖动时的回调函数，选填}",</br>
						mouseupFn: "function() {鼠标放开时的回调函数，选填}",</br>
					},</br>
					isLog : '是否输出内部日志，默认true',</br>
				};</br>
*/