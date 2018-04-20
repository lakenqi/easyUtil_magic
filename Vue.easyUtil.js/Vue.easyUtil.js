/* ========== */
/* = Vue.easyUtil by qy 2017.3.8 = */
/* = easy-using for html DOM structure and data    = */
/* = continue updating  = */
/* = CopyRight by qy  = */
/* ========== */

//默认值*****************************************************
var _s = Vue.prototype._s
Vue.prototype._s = function (s) {
  if(typeof s === 'number'){
  	return _s.call(this, s)
  }else{
  	return _s.call(this, s || "--")
  } 
}
//默认值结束***************************************************
//组件部分*****************************************************
//  = 下拉框 = 
Vue.component('selected',{
	props : ['id','text'],
	template: '\
	<div :id="idName" class="dropdown easyUtil-blueForm" v-outsideclose="closeMenu" @click="openMenu()" :class="openClass">\
		<button type="button" class="dropdown-toggle easyUtil-flexContainerRow" data-toggle="dropdown">\
			<span class="">{{text}}</span>\
			<i class="easyUtil-fBlue downarray"></i>\
		</button>\
		<ul class="dropdown-menu dropdown-menu-right menu-list">\
			<slot>\
				<li>\
					<a class="" val=""></a>\
				</li>\
		    </slot>\
		</ul>\
	</div>',
	data:function(){
		return {
			idName: this.id,
			openClass: null,
		}
	},
	methods:{
		openMenu : function () {
			if (this.openClass) {
				this.openClass = null
			} else{
				this.openClass = 'open'
			}
		},
		closeMenu:function () {
			this.openClass = null
		}
	}
});
//  ========== 
//  = jDate 插件 日期组件 = 
Vue.component('j-date',{
	props : ['id','defaulttext'],
	template: '\
	<div class="easyUtil-blueForm easyUtil-flexContainerRow">\
		<input type="text" class="jeinput" :name="idName" :id="idName" :placeholder="text" value="" readonly="readonly">\
		<label :for="idName"><i class="iconfont easyUtil-fBlue icon-riqi"></i></label>\
	</div>',
	data:function(){
		return {
			idName: this.id,
			text: this.defaulttext
		}
	}
});
//  ========== 
//  = super-table 表格组件 =
Vue.component('super-table',{
	template:'\
	<div :id="mainId" :class="mainClass">\
		<div v-if="showHead" :id="theadId" class="easyUtil-table">\
			<div class="thead">\
				<div class="tr" :class="headCounter">\
					<slot name="thead"></slot>\
				</div>\
			</div>\
		</div>\
		<div class="easyUtil-switchDiv easyUtil-hidden"></div>\
		<div :id="bodyId" :class="bodyClass">\
			<div :id="tbodyId" class="easyUtil-table" v-cloak>\
				<div class="tbody" :class="bodyCounter">\
					<div id="hiddenNoSee" class="tr easyUtil-hidden"></div>\
					<slot name="tbody"></slot>\
				</div>\
			</div>\
			<slot></slot>\
			<div id="managerLoading" class="easyUtil-hidden easyUtil-loading"><img :src="imgPath"/></div>\
		</div>\
	</div>',
	props:[
	'maindiv',  //主divid
	'bodydiv',  //表格bodydivid
	'head',   //表头id
	'body',   //表身id
	'maindivclass',  //主div class
	'bodydivclass',  //表格body div class
	'loadingpath',   //加载图表地址，有默认值
	'iscounter',    //是否启用计数器
	/*'emptytip'    //*/
	],
	data:function () {
		return {
			mainId: this.maindiv || "tableDiv",
			bodyId: this.bodydiv || "tableBodyDiv",
			theadId : this.head,
			tbodyId : this.body,
			mainClass : this.maindivclass,
			bodyClass : this.bodydivclass,
			imgPath : this.loadingpath || "../img/Loading6-3.gif",
			/*noContent :　this.emptytip || "暂无数据",*/
			showHead : false,
			counterClass : this.iscounter,
			headCounter : 'easyUtil-CounterHead',
			bodyCounter : 'easyUtil-startCounter'
		};
	},
	created:function () {
		if (this.theadId) {
			this.showHead = true;
		}
		if (!this.counterClass) {
			this.headCounter = "";
			this.bodyCounter = "";
		}
	},
});
//  ========== 
//组件部分结束*****************************************************
//指令部分********************************************************
//  = 自定义外部点击关闭指令 = 
Vue.directive('outsideclose',{
	bind: function (el,binding,vnode) {
		function handleClick(e){
			if (el.contains(e.target)) {
				return false;
			}
			if (binding.expression) {
				binding.value(e);
			}
		}
		el._outSideClose = handleClick;
		document.addEventListener('click',handleClick);
	},
	unbind: function (el,binding) {
		document.removeEventListener('click',el._outSideClose);
		delete el._outSideClose;
	}
});
//  ========== 
//指令部分结束********************************************************
