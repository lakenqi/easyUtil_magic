<h3>js模块插件</h3>
		<h4>包含三种：一个是通用工具，一个是dom操作，一个是自动滚屏的跑马灯插件，插件均支持模块化</h4>
		<h4>介绍（如无特殊说明，均以普通引用入口进行介绍，模块化以自定义为主）</h4>
		<h5>一、通用工具（easyUtil.common）普通引用通过对象名easyUtil点出如下方法</h5>
		<ul>
			<li>
				<p>1.formatDate(date, fmt):</p>
				<p></p>&emsp;&emsp;日期格式化方法，第一参数为Date类型日期，第二参数为格式化的字符串，如“yyyy-MM-dd HH:mm:ss”</span>
			</li>
			<li>
				<p>2.formatJsonDate(jsonDate, fmt):</p>
				<p>&emsp;&emsp;json对象类型日期格式化方法，第一参数为json对象保存的日期，第二参数为格式化的字符串，如“yyyy-MM-dd HH:mm:ss”</p>
			</li>
			<li>
				<p>3.splitNumByThree(data, flag):</p>
				<p>&emsp;&emsp;千分位格式化数字方法，每三个为一组，逗号分隔，第一参数为数值，第二参数为是否间隔空格，选填，如“111, 222”，默认带空格，如不需要空格，则设为true即可</p>
			</li>
			<li>
				<p>4.currying(fn):</p>
				<p>&emsp;&emsp;函数柯里化</p>
			</li>
			<li>
				<p>5.bindCurry(fn, context):</p>
				<p>&emsp;&emsp;bind柯里化函数，第二参数为上下文</p>
			</li>
			<li>
				<p>6.scrollTogather(el_id1, el_id2, main_id):</p>
				<p>&emsp;&emsp;两个容器同步滚动方法，可用于对比场景，滚动其中一个，另一个也跟着滚动，参数分别为两个滚动容器的id和主容器id，如同一个页面存在多个该功能，建议每一组设置单独的主容器，防止出现干扰</p>
			</li>
			<li>
				<p>7.scrollUntilTop(eleId, container):</p>
				<p>&emsp;&emsp;滚动贴边方法，实现元素滚动到上边缘时，不再随父级滚动的功能，参数一为元素id选择器“#id”，参数二为父级元素id选择器（默认html为父级）</p>
			</li>
			<li>
				<p>8.switchAndAntiSql(data):</p>
				<p>&emsp;&emsp;防止sql注入，自动过滤sql关键字，如发现则返回false,否则返回URI编码后的字符</p>
			</li>
			<li>
				<p>9.testPalindrome(data):</p>
				<p>&emsp;&emsp;回文数判定方法，返回布尔值</p>
			</li>
			<li>
				<p>10.createProgress(done, total, {<br/>
						&emsp;el = document.body,<br/>
						&emsp;width = 200,<br/>
						&emsp;height = 10,<br/>
						&emsp;color = "green",<br/>
						&emsp;colorBg = "#000",<br/>
						&emsp;callback = function() {},<br/>
					} = {}) :</p>
				<p>&emsp;&emsp;canvas实现进度条功能，done为已完成数，total为总数，第三参数为可选，el为进度条插入元素位置，宽高，color进度条颜色，colorBg进度条背景颜色,callback为进度条结束时的回调函数</p>
			</li>
		</ul>
		<h5>二、DOM工具（easyUtil.dom）普通引用通过对象名easyDom点出如下方法,该模块适用原生js操作</h5>
		<ul>
			<li>
				<p>1.ready(function(){}):</p>
				<p></p>&emsp;&emsp;DOM加载完毕调用函数，easyDom.ready(function(){})用于在DOM结构加载完毕后执行脚本</span>
			</li>
			<li>
				<p>2.$(selector):</p>
				<p></p>&emsp;&emsp;选中单个DOM元素，传入相应的selector</span>
			</li>
			<li>
				<p>3.$$(selector):</p>
				<p></p>&emsp;&emsp;选中多个DOM元素，传入相应的selector</span>
			</li>
			<li>
				<p>4.addClass(el, ...classes)(classList方法的兼容方法):</p>
				<p></p>&emsp;&emsp;增加class类样式，el为节点对象，classes类可以写多个，以逗号分隔的字符串即可，元素已有的类自动忽略</span>
			</li>
			<li>
				<p>5.removeClass(el, ...classes)(classList方法的兼容方法):</p>
				<p></p>&emsp;&emsp;删除class类样式，el为节点对象，classes类可以写多个，以逗号分隔的字符串即可，元素没有的类自动忽略</span>
			</li>
			<li>
				<p>6.toggleClass(el, class_name)(classList方法的兼容方法):</p>
				<p></p>&emsp;&emsp;切换class类样式，el为节点对象，实现添加或删除class_name功能</span>
			</li>
			<li>
				<p>7.forEach(els,fn):</p>
				<p></p>&emsp;&emsp;浏览器兼容forEach的方法，传入节点对象集合els,和自定义自定义循环回调函数fn， fn函数参数为item, index</span>
			</li>
			<li>
				<p>8.style(el,key,value):</p>
				<p></p>&emsp;&emsp;获取或赋值给对应的style属性，key值可直接输入对应的css属性（无需驼峰转换），value值有则赋值，无则取值</span>
			</li>
			<li>
				<p>9.attr(el,key,value):</p>
				<p></p>&emsp;&emsp;DOM属性的取值或赋值方式，key为对应的DOM属性，无需关注是否DOM对象的属性，还是自定义属性，该方法均可操作，value值有则赋值，无则取值</span>
			</li>
		</ul>
		<h5>三、跑马灯插件（easyUtil.Scrolling）普通引用通过对象名Scrolling点出如下方法</h5>
		<ul>
			<li>
				<p>6.easyScroll(id, speed):</p>
				<p></p>&emsp;&emsp;传入滚动主容器Id和滚动的速度，默认100ms</span>
			</li>
		</ul>