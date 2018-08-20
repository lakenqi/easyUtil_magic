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
			<div :id="tbodyId" class="easyUtil-table">\
				<div class="tbody" :class="bodyCounter">\
					<slot name="tbody"></slot>\
				</div>\
			</div>\
			<div class="easyUtil-noContent" v-show="emptyflag">{{noContent}}</div>\
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
	'emptytip',    //空值内容
	'emptyflag'   //是否无值
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
			showHead : false,
			counterClass : this.iscounter,
			headCounter : 'easyUtil-CounterHead',
			bodyCounter : 'easyUtil-startCounter',
			noContent: this.emptytip || "暂无内容"
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
	  <span v-if="show==0">共 {{max}} 页</span>\
		<span v-if="show==1">共 {{nums}} 条数据</span>\
		<span class="btn" @click="pageDown" :disabled="currentVal <= min"> << </span>\
		<span>{{currentVal}}</span>\
		<span class="btn" @click="pageUp" :disabled="currentVal >= max"> >> </span>\
		<input type="text" :value="value" @change="pageChange" @blur="goToPage" @keyup.enter="goToPage">\
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
			inputId: this.pageid,
			currentVal : this.value
		}
	},
	watch:{
		currentVal:function(data){
			this.$emit('input',data);
			this.$emit('on-change',data);
		},
		value: function(data){
			this.changeNum(data);
		},
	},
	methods:{
		pageDown:function(){
			if(this.currentVal <= this.min){
				return;
			}
			this.currentVal -= 1;
			this.$emit('down',this.currentVal);
		},
		pageUp:function(){
			if(this.currentVal >= this.max){
				return;
			}
			this.currentVal += 1;
			this.$emit('up',this.currentVal);
		},
		goToPage: function(){
			this.$emit('go',this.currentVal);
		},
		changeNum:function(data){
			if(data < this.min){
				data = this.min;
			}
			if(data > this.max){
				data = this.max;
			}
			this.currentVal = data;
		},
		pageChange:function(e){
			var val = e.target.value.trim(),
					max = this.max,
					min = this.min,
					regex = /^[0-9]*$/;
			if(regex.test(val)){
				val = parseInt(val,10);
				this.currentVal = val;
				if(val > max){
					this.currentVal = max;
				}else if(val < min){
					this.currentVal = min;
				}
			}else{
				e.target.value = this.currentVal;
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
			val : this.value
		}
	},
	watch:{
		value : function(data){   //监听value变化,则val也变化
			this.val = data;
		}
	},
	computed:{
		styles:function(){
			return {"width": this.bar+"%"};
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
//  = 圆形按钮 = 
Vue.component('round-menu',{
	template:'\
	<div class="menuMainDivR">\
	    <div class="menuContainerR">\
	        <ul class="mainMenu">\
	            <li class="mainMenuText"><a>{{menu}}</a>\
	                <ul class="firstMenu">\
	                    <slot>\
												<li id="clearBtn" class="firstMenuText"><a><span>啥也没有</span></a></li>\
										   </slot>\
	                </ul>\
	            </li>\
	        </ul>\
	    </div>\
	</div>',
	props:['menu']
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
