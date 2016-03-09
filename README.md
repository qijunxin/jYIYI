/*
*
* This is just a light javascript library
* 
* Author :Qi Junxin
*
*
*-------------------------Api Abstract---------------------------
	01.array
		concat:合并数组
		contains:判断数组中是否包含某元素
		descendingSort:降序排列,返回新数组
		increasingSort:升序排列,返回新数组
		empty:清空数组
		index:获取元素在数组中的索引
		intersection:输出两个数组的交集
		lastIndexOf:从后面查找元素的索引
		max:输出数组的最大项
		min:输出数组的最小项
		remove:移除元素
		removeAt:移除指定位置的元素
		shuffle:将数组打乱
		unique:去除重复数组

	02.date
		add:计算日期  yy.date.add(day,20)
		getDDay:显示周或者星期   yy.date.getDDay(day,Z_X)
		toString:格式化日期   yy.date.toString(day,'yyyy-mm-dd')
		getEnMonth:返回英文月份，例如January

	03.string
		filterText:屏蔽指定词
		md5:md5加密
		hasNum:判断是否存在数字
		removeSpace:移除字符串两边空白
		toArray:转换为数组

	04.regExp
		isChinese:是否为中文
		isDate:是否为正确日期格式
		isEmail:是否为email地址
		isURL:是否为url地址

	05.url
		getQueryArray:获取url查询参数的键值对
		getQueryString:获取url查询参数
		getUrlParam:获取url查询参数中指定name的值
	
	06.query
		通过id获取,该元素是唯一的 
			yy.query('#id') 
			 
		通过className获取 
			yy.query('.cls') 
			yy.query('span.cls') 
			yy.query('#id .cls')
			yy.query('#id span.cls') 
			
		通过tagName获取 
			yy.query('span') 获取文档中所有的span元素
			yy.query('#id span') 获取#abc中所有的span元素

	07.dom
		parent  : 选择父级元素
		siblings : 获取兄弟元素		
		first : 获取第一个元素	
		last : 获取最后一个元素
		prev : 选择前一个元素
		next : 获取后一个元素
		eq : 获取第几个元素
		gt : 匹配所有大于给定索引值的元素
		lt : 匹配所有小于给定索引值的元素
		even : 获取偶数个元素
		odd : 获取奇数个元素

		each:遍历元素
		empty : 清空元素
		remove : 移除
		replace : 置换元素

		before : 在每个匹配的元素之前插入内容
		prepend : 元素内部前置内容
		append : 元素内部追加内容

		attr : 设置或获取属性
		removeAttr : 移除属性		
		css : 设置或获取样式
		data:设置或获取data－属性值		
		addClass : 增加类
		hasClass : 检查是否含有某样式
		removeClass : 移除样式 
		offset : 获取元素基于视口的相对偏移
		html : 创建或获取html	
		text : 创建或获取文本

		fadeIn : 淡入
		fadeOut : 淡出
		fadeTo : 变换到指定透明度
		show : 显示
		hide : 隐藏
		toggle : 元素切换 隐藏－可见	
		on : 绑定事件

	08.eventUtil
		addHandler : 添加事件监听
		removeHandler : 移除事件监听
		getEvent : 获取参数
		getTarget : 获取目标
		preventDefault : 阻止浏览器默认事件	
		stopPropagation : 阻止冒泡事件

	09.browser 
		core : 输出浏览器内核信息
		version : 输出浏览器版本信息
		chrome : 输出chrome信息
		firefox : 输出firefox信息
		IE : 输出ie信息
		opera : 输出opera信息
		safari : 输出safari信息
		isGecko : 是否为Gecko内核
		isWebkit : 是否为Webkit内核

	10.platform
		isMobile : 是否为移动设备
		isAndroid : 是否为安卓系统
		isIpad : 是否为iPad
		isIphone : 是否为iPhone
		isMac : 是否为Mac
		isWindows : 是否为Windows

	11.ajax
		get : 使用Get方法获取数据  yy.ajax.get(url,fun,format,bool)
		post : 使用Post方法传递数据 yy.ajax.post(url,data,fun,format,bool)	
		
	12.view
		getHeight : 获取页面高度
		getWidth : 获取页面宽度
		getScrollLeft : 获取横向滚动量
		getScrollTop : 获取纵向滚动量
		getViewHeight : 获取页面视觉区域高度
		getViewWidth : 获取页面视觉区域宽度
		rollTo : 页面滚动至
		rollToBottom : 页面滚动至底部
		rollToTop ： 页面滚动至顶部
*
*/
