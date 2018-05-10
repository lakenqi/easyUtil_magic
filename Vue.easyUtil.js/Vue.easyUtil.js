/* ========== */
/* = Vue.easyUtil by qy 2017.3.8 = */
/* = easy-using for html DOM structure and data    = */
/* = continue updating  = */
/* = CopyRight by qy  = */
/* ========== */

//==============================默认值========================================
var _s = Vue.prototype._s
Vue.prototype._s = function (s) {
  if(typeof s === 'number'){
  	return _s.call(this, s)
  }else{
  	return _s.call(this, s || "--")
  } 
}
//====================================默认值结束====================================
//====================================组件部分====================================
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
			imgPath : this.loadingpath || "../images/Loading6-3.gif",
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
//  = 分页组件 = 
Vue.component("super-page",{
	template:'\
	<div class="easyUtil-page">\
	  <span v-if="show==0">共 {{totalPage}} 页</span>\
		<span v-if="show==1">共 {{totalNum}} 条数据</span>\
		<span class="btn" @click="pageDown" :disabled="currentPage <= min"> << </span>\
		<span>{{currentPage}}</span>\
		<span class="btn" @click="pageUp" :disabled="currentPage >= max"> >> </span>\
		<input type="text" :value="currentPage" @change="pageChange" @blur="goToPage" @keyup.enter="goToPage">\
	</div>',
	props:{
		min:{    //最小页码
			type:Number,
			default:1
		},
		max:{    //最大页码
			type:Number,
			default:Infinity
		},
		nums:{    //最大数据量
			type:Number,
			default:Infinity
		},
		value:{   //当前页码
			type:Number,
			default:1
		},
		show:{   //显示样式0为总页码,1为总数据
			type:String,
			default:"0"
		}
	},
	data:function(){
		return {
			totalNum : this.nums,
			totalPage : this.max,
			currentPage : this.value,
			inputId: this.pageid
		}
	},
	watch:{
		currentPage:function(data){
			this.$emit('input',data);
			this.$emit('on-change',data);
		},
		value: function(data){
			this.changeNum(data);
		}
	},
	methods:{
		pageDown:function(){
			if(this.currentPage <= this.min){
				return;
			}
			this.currentPage -= 1;
			this.$emit('down',this.currentPage);
		},
		pageUp:function(){
			if(this.currentPage >= this.max){
				return;
			}
			this.currentPage += 1;
			this.$emit('up',this.currentPage);
		},
		goToPage: function(){
			this.$emit('go',this.currentPage);
		},
		changeNum:function(data){
			if(data < this.min){
				data = this.min;
			}
			if(data > this.max){
				data = this.max;
			}
		},
		pageChange:function(e){
			var val = e.target.value.trim(),
					max = this.max,
					min = this.min,
					regex = /^[0-9]*$/;
			if(regex.test(val)){
				val = parseInt(val,10);
				this.currentPage = val;
				if(val > max){
					this.currentPage = max;
				}else if(val < min){
					this.currentPage = min;
				}
			}else{
				e.target.value = this.currentPage;
			}
		}
	},
	mounted:function(){
		this.changeNum(this.value);
	}
});
//  ========== 
//  = div生成横向bar图带数字 =
Vue.component('super-bar',{
	template:'\
	<div class="easyUtil-outBar">\
		<div class="easyUtil-bar" :style="styles"></div>\
		<span>{{val}}</span>\
	</div>',
	props:["bar","value"],
	data:function(){
		return {
			barWidth:this.bar,
			val :this.value
		}
	},
	computed:{
		styles:function(){
			return {"width": this.barWidth+"%"};
		},
	}
});
//  ========== 
//  ========== 
//  = 进度条组件 名称 数字跟随 显示百分比 = 
Vue.component('super-progressbar',{
	template:'\
	<div class="easyUtil-progressBar">\
		<div>{{type}}</div>\
		<div class="easyUtil-numDiv" :class="colorClass">\
			<div :style="styles">{{val}}</div>\
		</div>\
		<div>{{width}}</div>\
		<div class="easyUtil-outProBar">\
			<div class="easyUtil-inProBar" :class="colorClass" :style="styles"></div>\
		</div>\
	</div>',
	props:["name","value","color","percent"],
	data:function(){
		return {
			width:this.percent,
			val :this.value,
			colorClass: this.color,
			type : this.name
		}
	},
	computed:{
		styles:function(){
			return {"width": this.width};
		},
	}
});
//  ========== 
//====================================组件部分结束====================================
//====================================指令部分====================================
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
//====================================指令部分结束====================================
