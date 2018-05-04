# easyUtil.css
* <h3>该css整理了很多常用类型以及成型样式，可以直接引用类名使用，另外还有easyUtil系列组件所依赖的样式，所以在使用easyUtil系列组件时，务必引入该css</h3>
* <h3>如果需要特殊修改，可以复制相应类型到自定义css文件中修改，直接覆盖即可，以下是通用样式详细说明：</h3>
* 1.该css去除了a标签和ul标签的默认样式并设置html默认字体颜色白色，预定义了h3,input,img,button标签，修改了chrome浏览器滚动条样式</br>
* 2.easyUtil-fixedBody ： 自适应全屏，一般用在最外层div或body上，保证页面自适应屏幕大小</br>
* 3.easyUtil-flexContainerRow/easyUtil-flexContainerColumn ： 弹性盒模型布局，横向/纵向布局，无需浮动，即可实现div的横向排列，且宽度自适应</br>
* 4.easyUtil-mainMenu/easyUtil-unvisiable： 下拉菜单显示，在父级上引用第一个类，在子级上引入第二个类，可实现鼠标hover,子级显示与隐藏功能</br>
* 5.easyUtil-table ： 等宽表格样式，在table标签上引入该类，可以直接生成等宽，无分割线的表格，包括表头与表身的区别，各行变色及鼠标移入高亮提示</br>
* 6.easyUtil-startCounter/easyUtil-counter/easyUtil-CounterHead ： 计数器，一般与表格配合使用，也可用在ul等列表标签，用于显示序号，在表头引入第三个类，可以显示“序号”字样；在父级，如tbody引入第一个类开始计数,在子级，如tr引入第二类显示数字，则可根据行数量，从1开始自动累加显示序号</br>
* 7.easyUtil-colorLine ： 字体渐变色 默认蓝白纵向渐变，可以复制该类自行修改颜色</br>
* 8.easyUtil-switchDiv ： 加载动画切换类，引入该类，当前标签会显示圆圈加载样式，自适应当前父级容器的大小，一般用于整个页面或某一整块内容加载</br>
* 9.easyUtil-fontOverFlow ： 超出父级容器宽度的字体自动显示...可配合标签title属性实现鼠标移入显示全名</br>
* 10.easyUtil-noContent ： 无内容提示样式，该样式字体自动居中加粗显示</br>
* 11.easyUtil-btn ： 按钮样式，鼠标移入自动高亮</br>
* 12.easyUtil-glittering ： 鼠标移入，按钮闪光动画，一般配合按钮使用</br>
* 13.easyUtil-blinBlink ： 闪烁动画</br>
* 14.easyUtil-roll ： 自动滚屏动画，实现自下而上的跑马灯效果</br>
* 15.easyUtil-loading ： 加载动画类，父级容器引入该类，子级为img标签，可实现自适应当前父级容器大小的加载动画，一般用于局部内容，如表格的滚动加载</br>
* 14.easyUtil-blueForm ： 蓝色input边框</br>