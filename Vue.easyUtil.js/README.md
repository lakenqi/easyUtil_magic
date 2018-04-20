# <h1>Vue.easyUtil</h1>
* <h3>Introduce</h3>
 * <h3>基于Vue的组件生成器文件</h3>
 * <h3>可利用该生成器生成如下组件，便于开发，部分组件的功能性操作可能需要依赖其他文件，请参阅详细说明</h3>
 * <h3>所有依赖文件位于support文件加下，感谢提供依赖资源的大神，如需更多资源，请到相应的地址下载</h3>
 * <strong>1.selected下拉框组件:</strong>在父级组件上用id，text属性，分别命名组件的id和默认显示文本,</br>
 						&emsp;&emsp;&emsp;&emsp;在组件之间以"\<li>\<a class="" val="">text\</a>\</li>"标签模板生成下拉框的内容即可</br>
 						&emsp;&emsp;&emsp;&emsp;组件需配合jquery.easyUtil中的初始化方法可正常使用，样式引入easyUtil.css即可。</br>
 * <strong>2.j-date日期组件:</strong>在父级组件上用id，defalulttext属性，分别命名组件的id和默认显示文本,</br>
 						&emsp;&emsp;&emsp;&emsp;本组建基于jquery.jedate插件，需要引入，并用其方法初始化，同时需要easyUtil.css及jedate.css样式支持</br>
* <strong>3.v-outsideclose指令:</strong>如有点击外部任意地方关闭菜单的需求，可使用该组件，绑定对应的关闭函数名称即可</br>
* <strong>4.super-table表格组件</strong>父级组件上使用如下属性：</br>
										&emsp;&emsp;&emsp;&emsp;'maindiv',  //主divid</br>
										&emsp;&emsp;&emsp;&emsp;'bodydiv',  //表格bodydivid</br>
										&emsp;&emsp;&emsp;&emsp;'head',   //表头id</br>
										&emsp;&emsp;&emsp;&emsp;'body',   //表身id</br>
										&emsp;&emsp;&emsp;&emsp;'maindivclass',  //主div class</br>
										&emsp;&emsp;&emsp;&emsp;'bodydivclass',  //表格body div class</br>
										&emsp;&emsp;&emsp;&emsp;'loadingpath',   //加载图表地址，有默认值</br>
										&emsp;&emsp;&emsp;&emsp;'iscounter',    //是否启用计数器，分别命名组件的id和默认显示文本,</br>
										&emsp;&emsp;&emsp;&emsp;可开启自定义表格及计数模式</br>
 						&emsp;&emsp;&emsp;&emsp;在组件之间以如下模板引入对应的表格内容即可：</br>
 						"\<template slot="thead">\
						\<span class="th" style="width: 25%;">\表头内容\</span>\
						\<span class="th" style="width: 20%;">\表头内容\</span>\
						\</template>\
						\<template slot="tbody">\
					\<div class="tr" :class="rangClass(i)"  v-for="(data,i) in datas">\
						\<span class="td" style="width: 25%;">\表格内容\</span>\
						\<span class="td" style="width: 20%;">表格内容</span>\
					\</div>\
				\</template>\
				\<template>\
					\<div class="easyUtil-noContent" v-show="show">\暂无内容\</div>\
				\</template>\"</br>
 						&emsp;&emsp;&emsp;&emsp;样式需引入easyUtil.css即可。</br>

		

