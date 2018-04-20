# <h1>jquery.easyUtil</h1></br>
 * <h3>Introduce</h3>
 * <h3>部分插件方法结合了外部其他插件，首先感谢创造这些方法的大神们，所有用于支持的插件，收录于support文件夹下，如果这些支持插件的完整版，请去对应的官网下载</h3>
 * <h5>先来个题外话，core文件夹中的easyUtil.css是一组常用的css样式总结，内部有注释，引入后可直接控制常用样式，如去除浏览器默认外边距，去除a标签下划线及ul标签圆点，其他均为类样式，使用时直接引入名称即可。如有冲突，直接在其他css中覆盖即可</h5>
 * <h3>以下正式介绍</h3>
 * <h3>为便于使用jquery.easyUtil插件现在分为完全版（位于easyUtil_core文件夹下的.all.js）和分项版（位于split文件夹下的各种名字版）</h3>
 * <h3>使用时，可根据需求引用不同的js，其中完全版涵盖除drag方法外（另见split文件下）的其他所有方法，文件体积较大。而分项版体积小，但是需配合引用.core.js后缀的核心js(位于easyUtil_core文件夹下)使用。</h3>
 * <h3>方法如果没有独立的js，则均在后缀core.js核心js中</h3>
 * <h3>在引入all后缀的完全版js，输入$.easyUtil()，可在浏览器控制台看到所包含的所有方法简介</h3>
 * <h3>drag方法的参数，参见split文件夹下内容，其余所有方法使用参数及描述如下：</h3>
 * <strong>1.$.log(message，title)</strong>带日期和格式化的控制台日志， 第一参数为日志内容，第二参数为日志标题为选填项（默认输出“log日志”）</br>
 * <strong>2.$.superAlert/superConfirm(options)   needs layer.js</strong></br>
 				&emsp;<strong>var option</strong> = {</br>
						&emsp;&emsp;&emsp;<strong>msg : </strong>“请定义提示信息内容-参数‘msg’！”，  //必填</br>
						&emsp;&emsp;&emsp;<strong>title :</strong> “提示信息”，</br>
						&emsp;&emsp;&emsp;<strong>iconNum :</strong> 默认3, （1 成功，2 失败，3 问号，4 锁定，5 难过表情，6 高兴表情，7 感叹号）</br>
						&emsp;&emsp;&emsp;<strong>btn1 : </strong>'确定'， alert可修改此项 选填</br>
						&emsp;&emsp;&emsp;<strong>btn2 :</strong> '取消'，</br>
						&emsp;&emsp;&emsp;<strong>closeBtn :</strong> 1 ,关闭按钮的样式，参照layer的样式，默认为1</br> 
						&emsp;&emsp;&emsp;<strong>fnSuccess :</strong> function (){},</br>
						&emsp;&emsp;&emsp;<strong>fnCancle :</strong> function (){},</br>
						&emsp;&emsp;&emsp;<strong>isLog: </strong>“是否输出内部自带日志,默认为false”，</br>
				&emsp;};</br>
 * <strong>3.$(selector).color()/background()/border()/getClass()/changeClass(oldName,newName)</strong></br>
 			<strong>一组整合Jquery的方法，可直接获得或修改颜色color(),background(),border();</strong></br>
 			<strong>可直接获得元素的class名称：getClass(),可以完成元素class的转换changeClass(old,new);</strong></br>
 * <strong>4.$.superConcat(option)</strong></br>
        &emsp;<strong>var option</strong> = {					</br>
					&emsp;&emsp;&emsp;<strong>strData:</strong> ['需拼接字符串,为数组形式, 必填项目'], </br>
					&emsp;&emsp;&emsp;<strong>isArray:</strong> '默认为‘true’，设置为‘false’可得到字符串类型拼接结果', </br>
					&emsp;&emsp;&emsp;<strong>models:</strong> {</br>
						&emsp;&emsp;&emsp;&emsp;&emsp;<strong>betweenStr1:</strong> '每个字符串的引用起始符号，选填', </br>
						&emsp;&emsp;&emsp;&emsp;&emsp;<strong>prefix: </strong>'前缀,选填',</br>
						&emsp;&emsp;&emsp;&emsp;&emsp;<strong>suffix:</strong> '后缀,选填', </br>
						&emsp;&emsp;&emsp;&emsp;&emsp;<strong>betweenStr2: </strong>'每个字符串的引用终止符号，选填', </br>	
					&emsp;&emsp;&emsp;},</br>
					&emsp;&emsp;&emsp;<strong>startStr:</strong> '拼接结果值的起始符号，选填,当‘isArray’设为‘false’时生效', </br>
					&emsp;&emsp;&emsp;<strong>endStr:</strong> '拼接结果值的终止符号，选填 ,当‘isArray’设为‘false’时生效', </br>
					&emsp;&emsp;&emsp;<strong>splitStr:</strong> '分隔符号，当‘isArray’设为‘false’时生效，选填，默认为‘,’', </br>
					&emsp;&emsp;&emsp;<strong>isLog:</strong> '是否输出内部自带日志，默认为false'</br>
				&emsp;};</br> 
 * <strong>5.$.changeUrlArg(url, arg, val)</strong></br>
 * <strong>6.$.(selector).swicthBlockElm(option,togather) --块级元素切换，第二参数设置是否同时转换，默认false,可加入动画，需要引入 animate.css, 也可以引入其他css动画样式，或者自定义css动画;</strong></br>
 				&emsp;<strong>var exemple</strong> = {</br>
					&emsp;&emsp;&emsp;<strong>switchElmNames:</strong> '[元素id或class,使用块级元素,数组类型, 样式为"#idName或.className"],必填',</br>
					&emsp;&emsp;&emsp;<strong>isEvent:</strong> '是否启用鼠标事件,默认为"false",第二参数为true时，无效',</br>
					&emsp;&emsp;&emsp;<strong>eventType: </strong>'鼠标事件类型,默认"click",选填，第二参数为true时，无效',</br>
					&emsp;&emsp;&emsp;<strong>currentShowElm: </strong>'当前首先显示的元素序号,顺序以"switchElmNames"为主,从1开始,默认为1,即数组中第一个元素,</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;选填,第二参数为true时，无效',</br>
					&emsp;&emsp;&emsp;<strong>animation:</strong> '[],数组形式，如果动画相同，则写一个，否则需一一对应，动画样式,采用animate.css中的动画,</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;默认为"animated flipInY",如使用该css,类名输入要完整,即“animated xxx”,</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;保证动画正确调用;该项也可自定义,选填 ',</br>
					&emsp;&emsp;&emsp;<strong>callbackFn: </strong>'切换完成后的回调函数,function() {}, 选填',</br>
					&emsp;&emsp;&emsp;<strong>callbackFnElm :</strong> '仅在事件模式下生效,激活函数的元素,可根据"switchElmNames"中顺序定义,从1开始;默认为0,</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;即每次事件发生都激活,选填,第二参数为true时，无效' ,</br>
					&emsp;&emsp;&emsp;<strong>delayTime :</strong>'回调函数执行的时间,单位毫秒,默认为1000',</br>
					&emsp;&emsp;&emsp;<strong>isLog: </strong>'是否输出内部自带日志,默认为false',</br>
				&emsp;};</br>
 * <strong>7.$.getRootPath()</strong></br>
 * <strong>8.$.getUrlParam()</strong></br>
 * <strong>9.$(selector).windowHeight(options) 设置屏幕高度，参数可不写，如有特殊处理参考如下：</strong></br>
 			&emsp;<strong>var exemple</strong> = {</br>
 					&emsp;&emsp;&emsp;<strong>specialElms :</strong> [],'选填，数组形式，如果有需要特殊调整高度的元素，写入此参数，注意仅限于</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;动态取屏幕高度的元素，否则会减小到0'</br>
 					&emsp;&emsp;&emsp;<strong>changeNums :</strong> [],'选填，数组形式，上述参数中需调整的高度，如果调整高度相同，写一个即可，</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;否则需要与上述参数一一对应'</br>
 					&emsp;&emsp;&emsp;<strong>isLog: </strong>false '是否输出内部日志，默认false'</br>
 			&emsp;}</br>
 * <strong>10.$.superTimer(options) 统一设置js定时器管理，可自动激活和清除，也可通过事件驱动进行，详见参数设置'</strong></br>
			&emsp;<strong>var exemple</strong> = {</br>
					&emsp;&emsp;&emsp;<strong>isInterval: </strong>'选填，是否循环定时，默认false',</br>
					&emsp;&emsp;&emsp;<strong>times:</strong> '选填，[1000] 每个定时器的执行时间，单位毫秒，数组形式，默认一个时间：1000ms,如有多个触发时间，</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;需要与定时器函数一一对应',</br>
					&emsp;&emsp;&emsp;<strong>timerFns:</strong> '必填，[function() {}] 定时器执行函数内容，数组形式，将完整函数写入数组，每一个functiong(){}代表</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;一个定时器，如有多个，则按先后顺序写入',</br>
					&emsp;&emsp;&emsp;<strong>isEvent:</strong> '选填，是否事件驱动定时器，默认false',</br>
					&emsp;&emsp;&emsp;<strong>eventType:</strong> "选填，['click']，事件驱动类型，数组，默认click,建议使用一个事件，如有多个事件，则必须要与</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;触发元素，定时器函数一一对应（顺序，个数必须完全一致）",</br>
					&emsp;&emsp;&emsp;<strong>eventElms:</strong> '选填，[]，事件触发元素#xx或.xx,数组，如开启事件驱动，该项必填，要求与事件驱动类型一致，</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;如有多个，需要一一对应',</br>
					&emsp;&emsp;&emsp;<strong>isClear: </strong>'选填，是否清除定时器，默认false',</br>
					&emsp;&emsp;&emsp;<strong>clear:</strong> {</br>
					&emsp;&emsp;&emsp;&emsp;	&emsp;<strong>cELms: </strong>'选填，[]，清除定时器子项，事件触发元素，数组，该项如不填，默认采用定时清除，</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;如有多个，则要求同上',</br>
						&emsp;&emsp;&emsp;&emsp;&emsp;<strong>cEventType: </strong>"选填，['click']，清除定时器事件驱动类型，数组，默认click,建议使用一个事件，</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;如有多个事件，则必须要与触发元素，定时器函数一一对应（顺序，个数必须完全一致），</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;如cELms一项未填，此项无效"</br>
						&emsp;&emsp;&emsp;&emsp;&emsp;<strong>cTimes: </strong>'选填，[1000]，清除定时器的时间，如设置了事件触发元素，则此项无效，默认1000ms,</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;如有多个时间，要求同上',</br>
					&emsp;&emsp;&emsp;},</br>
					&emsp;&emsp;&emsp;<strong>isLog:</strong> '是否输出内部自带日志,默认为false',</br>
				&emsp;};</br>
 * <strong>11.$.optionCardSwitch(options) --设置选项卡切换div功能，可设置事件激活类型，设置动画，详见参数设置</strong></br>
			 &emsp; <strong>var example</strong> = {</br>
							&emsp;&emsp;&emsp;<strong>triggerElm :</strong> '触发转换的元素.class或标签名,建议使用无序列表Ul li 必填',</br>
								&emsp;&emsp;&emsp;<strong>switchElm :</strong> '转换div的主容器.Class,#id,或标签,建议使用DIV,必填',</br>
								&emsp;&emsp;&emsp;<strong>switchInner : </strong>'被转换的div.class或标签，建议使用div，默认值为div,如与默认值一致，选填',</br>
								&emsp;&emsp;&emsp;<strong>selectedClass :</strong> '当前激活的选项卡样式类型，选填',</br>
								&emsp;&emsp;&emsp;<strong>eventType:</strong> 'click，触发切换的鼠标事件类型，默认click,不可使用伪类，选填',</br>
								&emsp;&emsp;&emsp;<strong>animation : </strong>'切换时的动画class类，默认无，选填',</br>
								&emsp;&emsp;&emsp;<strong>switchTime : </strong>'100,切换的速度，默认100毫秒，选填',</br>
								&emsp;&emsp;&emsp;<strong>hoverClass :</strong> '鼠标移动到选项卡的样式，选填',</br>
								&emsp;&emsp;&emsp;<strong>isLog :</strong> 'false,是否输内部日志，默认false',</br>
							&emsp;};</br>
 * <strong>12.$.autoFoldMenu(options) -- 设置菜单自动折叠和显示功能，该方法会在menuELm内部自动生成class为makeCss的div层，可用于修改菜单样式</strong></br>
 				&emsp;<strong>var example</strong> = {</br>
 						&emsp;&emsp;&emsp;<strong>eventElm : </strong>'触发动作的元素,#id,.class,标签,必填',</br>
						&emsp;&emsp;&emsp;<strong>menuElm :</strong> '做为菜单隐藏和显示的元素,#id,.class,标签,必填',</br>
						&emsp;&emsp;&emsp;<strong>parentElm :</strong> '菜单项和触发元素的共同直接父级元素,#id,.class,标签,必填',</br>
						&emsp;&emsp;&emsp;<strong>showClass : </strong>'菜单显示时动作按钮的CSS类,选填 如有则两项必填',</br>
						&emsp;&emsp;&emsp;<strong>hiddenClass : </strong>'菜单隐藏时动作按钮的CSS类,选填 如有则两项必填',</br>
						&emsp;&emsp;&emsp;<strong>eventType : </strong>'click,触发事件类型,默认click,选填',</br>
						&emsp;&emsp;&emsp;<strong>speed : </strong>'600,折叠速度,毫秒,默认600,选填',</br>
						&emsp;&emsp;&emsp;<strong>isMouseout : </strong>'false,是否在鼠标离开时自动隐藏所有菜单,默认false, 选填',</br>
						&emsp;&emsp;&emsp;<strong>isLog :　</strong>'false,是否显示内部日志,默认false, 选填',</br>
				&emsp;};</br>
* <strong>13.$(selector).superTable(options) -- 克隆表格并赋值的功能，选择器为被赋值的table的id名称，需保证克隆模板的td上有class,且与javaBean属性对应</strong></br>
 				&emsp;<strong>重要说明：由于基于class进行赋值，因此使用本方法，须确保克隆模版中的tr标签最内层标签（即直接填写text文本的标签）与javabean有对应名称的class</strong></br>
 				&emsp;<strong>var example</strong> = {</br>
 						&emsp;&emsp;&emsp;<strong>datas : </strong>'[] ajax或其他数据源传回的json数组，对象形式与javabean对应，必填',</br>
						&emsp;&emsp;&emsp;<strong>cloneTrId :</strong> '克隆的表格tr模板id #id形式，必填',</br>
						&emsp;&emsp;&emsp;<strong>cloneEvent :</strong> 'false,是否克隆当前模板绑定的事件，默认false',</br>
						&emsp;&emsp;&emsp;<strong>hiddenClass :</strong> 'false，默认false，如果隐藏使用class实现，则需写入该class且该class只有隐藏功能 ，选填',</br>
						&emsp;&emsp;&emsp;<strong>specialClass : </strong>'[数组形式，是否有需要特殊处理的文本class名称，如有特殊处理的文本，</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;则该项必填，否则以下特殊参数将无效，直接填入名称即可，选填，</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;如果该项填入，则以下special开头的参数必须与之顺序一一对应，],</br>
						&emsp;&emsp;&emsp;<strong>isCss :</strong> 'true，特殊项是否进行css处理，默认为true',</br>
						&emsp;&emsp;&emsp;<strong>specialText : </strong>'[{},{}]数组形式的json，对应特殊处理的文本，有书写要求，键值对的形式，每一组一个json,</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;如[{‘0’：‘是’,‘1’：‘否’}],每组json必须与specialClass顺序一一对应',</br>
						&emsp;&emsp;&emsp;<strong>specialCssText :</strong> '[isCss为false,该项无效，数组形式，特殊css的文本，需要与cssClass参数顺序一一对应]',</br>
						&emsp;&emsp;&emsp;<strong>specialCssClass :</strong> '[isCss为false,该项无效，数组形式，特殊处理的css类名称，如变颜色，仅处理特殊</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;文本的样式，如果isOnlyCss为false，则所有special开头参数的顺序必须一一对应],</br>
						&emsp;&emsp;&emsp;<strong>specialFn:</strong>'function($tableNode){return $tableNode},其他特殊处理的自定义函数,内容自定义,</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;只需注意要传入节点参数,返回节点参数(参数名自定义,也可使用默认名字)',</br>
						&emsp;&emsp;&emsp;<strong>isLog :　</strong>'false,是否显示内部日志,默认false, 选填',</br>
				&emsp;};</br>  
* <strong>14.$(selector).initSelected(option)---自定义下拉菜单初始化操作，当使用了自定义下拉框时，可使用该方法初始化。参数为clickFn:function($elm){},点击选中项后触发的方法;自定义下拉菜单可参考easyUtil.css和Vue.easyUtil.js组件生成器，需要bootstrap.js文件'</strong></br>
* <strong>15.$(selector).superScroll(options，test) -- 鼠标滚动异步加载数据的方法，需要配合jquery.mousewheel滚动事件插件使用,第二参数适用于jsonp,跨域请求,如果与服务器不在同一路径,则可通过下列test参数修改路径,详见参数设置</strong></br>
			&emsp;<strong>var example</strong> = {</br>
 						&emsp;&emsp;&emsp;<strong>type : </strong>'post, Ajax加载类型，默认post',</br>
						&emsp;&emsp;&emsp;<strong>data :</strong> '传入参数，与Ajax使用方式相同',</br>
						&emsp;&emsp;&emsp;<strong>url :</strong> '提交地址，只需写明相对路径，如类映射名/方法映射名',</br>
						&emsp;&emsp;&emsp;<strong>async :</strong> 'true，是否异步，与Ajax方式相同',</br>
						&emsp;&emsp;&emsp;<strong>dataType : </strong>'jsonp，默认jsonp,与Ajax方式相同,</br>
						&emsp;&emsp;&emsp;<strong>jsonp :</strong> 'jsonpCallback，jsonp回调名称，默认即可，不用修改此项，除非有自定义',</br>
						&emsp;&emsp;&emsp;<strong>success : </strong>'function(data) {}，传输成功回调函数',</br>
						&emsp;&emsp;&emsp;<strong>error :</strong> 'function(data) {alert(网络连接出错！);},传输失败函数',</br>
						&emsp;&emsp;&emsp;<strong>loadingDivId :</strong> '负责显示加载动画的divID,选填',</br>
						&emsp;&emsp;&emsp;<strong>rollNames:</strong>'["startNums", "perShow"]，滚动加载的自定义名称，按[起始，每次滚动显示]的书写顺序，对应</br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;分页查询的起始条数名称和每页显示名称，默认名称如数组，需要保证与数据库所用名称相同',</br>
						&emsp;&emsp;&emsp;<strong>perShowNum:</strong>'10，每次滚动显示条数，默认10条，',</br>
						&emsp;&emsp;&emsp;<strong>isLog :　</strong>'false,是否显示内部日志,默认false, 选填',</br>
				&emsp;};</br>  
				 &emsp;<strong>var test</strong> =  {</br>
					&emsp;&emsp;&emsp;<strong>head:</strong> "localhost,ip地址,默认本机",</br>
					&emsp;&emsp;&emsp;<strong>port:</strong> '8080,端口号,默认8080',</br>
					&emsp;&emsp;&emsp;<strong>rootPath:</strong> '项目根路径,默认当前项目名称,书写时需要前面需要加"/"',</br>
				&emsp;};</br>
* <strong>16.$.superAjax(options,test)----ajax跨域请求jsonp方式，option内容与ajax参数相同，url只需填写映射名称即可，如类“映射名/方法映射名”，第二参数test是开启自定义地址的测试模式，参数及默认值为{head:“localhost”,port:“8080”,rootPath:“”}，可自定义修改地址</strong></br>
* <strong>17.$.arrayUniqueMagic(array)----数组去重方法</strong></br>
* <strong>18.$.upLoadMagic(options)----ajax上传文件，参数如下</strong></br>
	&emsp;<strong>var example</strong> = {</br>
 						&emsp;&emsp;&emsp;<strong>paramsName : </strong>'[] 回传的参数名称，数组形式，必须与参数值一一对应，必填',</br>
						&emsp;&emsp;&emsp;<strong>params :</strong> '[]，回传的参数值，数组形式，必须与参数名称一一对应，必填',</br>
						&emsp;&emsp;&emsp;<strong>url :</strong> 'action地址，填入相对路径即可，如“/类映射名/方法映射名”，不用加aciton字样,必填</br>
						&emsp;&emsp;&emsp;<strong>successFn :</strong> '上传成功回调函数，默认alert弹框提示，选填',</br>
						&emsp;&emsp;&emsp;<strong>errorFn : </strong>'上传失败回调函数，默认alert弹框提示，选填,</br>
						&emsp;&emsp;&emsp;<strong>isLog : </strong>'false,是否显示内部日志,默认false, 选填',</br>
				&emsp;};</br>
* <strong>19.$(selector).verifyCodeMagic(options)----验证码方法，包括生成和验证，参数如下</strong></br>
	&emsp;<strong>var example</strong> = {</br>
 						&emsp;&emsp;&emsp;<strong>imgId : </strong>'显示验证图片的标签ID，必填',</br>
						&emsp;&emsp;&emsp;<strong>imgUrl :</strong> '调取图片的action，填入相对路径即可，如“/类映射名/方法映射名”，不用加aciton字样，必填',</br>
						&emsp;&emsp;&emsp;<strong>changeId :</strong> 是否有点击换图的标签Id名称，有则填入，无则默认点击图片更换验证码，选填</br>
						&emsp;&emsp;&emsp;<strong>checkEvent :</strong> 激活验证的事件类型，默认blur,选填,</br>
						&emsp;&emsp;&emsp;<strong>checkFn : </strong>'自定义的验证函数，必填,</br>
						&emsp;&emsp;&emsp;<strong>isLog : </strong>'false,是否显示内部日志,默认false, 选填',</br>
				&emsp;};</br>   
* <strong>20.$.createEchartsMagic(options),$.resizeEchartsMagic()----echarts生成和自适应屏幕方法，生成方式可返回echats的数组，可用于清除重新生成，顺序与以下参数一致，参数如下</strong></br>
	&emsp;<strong>var example</strong> = {</br>
 						&emsp;&emsp;&emsp;<strong>chartsDatas : </strong>'[]echats参数变量名称，不用加引号，与下一项一一对应，必填',</br>
						&emsp;&emsp;&emsp;<strong>chartsDivId :</strong> '[]生成echats的divId名称字符串，与上一项一一对应，必填',</br>
						&emsp;&emsp;&emsp;<strong>isLog : </strong>'false,是否显示内部日志,默认false, 选填',</br>
				&emsp;};</br> 
*/
