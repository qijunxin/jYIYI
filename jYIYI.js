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
if(typeof yy !=='object'){
	var yy = {}
}

/*------------------------------01 array begin-------------------------------*/
if(typeof yy.array !== 'object'){
	yy.array = window.yy.array = function(a){
		return new yy.array.fn.init(a);
	}

	yy.array.fn = yy.array.prototype = {
		init:function(arr){
			if(typeof arr === 'object'){
				this[0] = arr;
			}
		},

		concat:function(arr2){
			var arr = this[0];
			return arr.concat(arr2);
		},

		contains:function(x){
			var arr = this[0],
			for(i in arr){
				if(arr[i] == x){
					return true
				}
			}
			return false;
		},

		descendingSort:function(){
			var arr = this[0];
			arr.sort(function(a,b){return b-a;});
			var sorted = [];
			for(var i=0;i<arr.length;i++){
				sorted.push(arr[i]);
			}
			return sorted;
		},

		increasingSort:function(){
			var arr = this[0];
			arr.sort(function(a,b){return a-b;});
			var sorted = [];
			for(var i=0;i<arr.length;i++){
				sorted.push(arr[i]);
			}
			return sorted;
		},

		empty:function(){
			var arr = this[0];
			arr.length = 0;
		},

		index:function(value){
			var arr = this[0];
			for(var i=0;i<arr.length;i++){
				if(arr[i]==value){
					return i;
				}
			}
			return -1;
		},

		intersection:function(arr2){
			var arr = this[0], ai = 0, bi = 0;
			var result = new Array();
			while(ai<arr.length&&bi<arr2.length){
				if(arr[ai]<arr2[bi]){
					ai++;
				}
				else if(arr[ai]>arr2[bi]){
					bi++;
				}
				else{
					result.push(arr[ai]);
					ai++;
					bi++;
				}
			}
			return result ;
		},

		lastIndexOf:function(value){
			var arr = this[0];
			for(var i=arr.length-1;i>=0;i--){
				if(arr[i] == value){
					return i;
				}
			}
			return -1;
		},

		max:function(){
			var arr = this[0];
			var maxnum = Math.max.apply(null,arr);
			return maxnum;
		},

		min:function(){
			var arr= this[0];
			var minnum = Math.min.apply(null,arr);
			return minnum;
		},

		remove:function(match){
			var arr = this[0],
				len = arr.length;
			while(len--){
				if(len in arr && arr[len] === match){
					arr.splice(len,1);
				}
			}
			return arr;
		},

		removeAt:function(index){
			var arr = this[0];
			return arr.splice(index,1)[0];
		},

		shuffle:function(){
			var arr = this[0],
				len = arr.length;
			for(var i=0;i<len;i++){
				var temp,
				    j = parseInt(Math.random()*len);
				temp = arr[j];
				arr[j] = arr[x];
				arr[x] = temp;
			}
			return arr;
		},

		unique:function(){
			var arr = this[0],
				result = [],
				originlen = arr.length,
				found = false,
				i,j;
			for(i=0;i<originlen;i++){
				for(j=0;j<result.length;j++){
					if(arr[i]===result[j]){
						found = true;
						break;
					}
				}
				if(!found) result.push(arr[i]);
			}
			return result;
		}
	}

	yy.array.fn.init.prototype = yy.array.prototype;
}
/*------------------------------01 array end---------------------------------*/
/*------------------------------02 date  begin-------------------------------*/
if(typeof yy.date !== 'object'){
	yy.date = {
		add:function(day.num){
			var val = day.valueOf();
			val+=num*24*60*60*1000;
			return new Date(val);
		},

		getDDay:function(day,Z_X){
			var zDay = ['周日','周一','周二','周三','周四','周五','周六'],
				xDay = ['星期天','星期一','星期二','星期三','星期四','星期五','星期六'];
			if(typeof Z_X == 'undefined' || Z_X == 'Z'){
				return zDay[day.getDay()];
			}else{
				return xDay[day.getDay()];
			}
		},

		toString: function(day,format){
			if(typeof format ==  'undefined'){
				format = 'yyyy-mm-dd';
			}
			var year = day.getFullYear(),
				month = day.getMonth()+1,
				date = day.getDate();

				month = month<10?'0'+month:month;
				date = date<10?'0'+date:date;
				format = format.replace('yyyy',year);
				format = format.replace('mm',month);
				format = format.replace('dd',date);
				return format;
		},

		getEnMonth:function(day){
			var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
			return month[day.getMonth()];
		}
	}
}

/*------------------------------02 date  end---------------------------------*/
/*------------------------------03 string begin------------------------------*/
if(typeof yy.string !== 'object'){
	yy.string = window.yy.string = function(str){
		return new yy.string.fn.init(str);
	}

	yy.string.fn = yy.string.prototype={
		init:function(str){
			if(typeof str ==='string'){
				this[0] = str;
			}
		},

		filterText:function(words){
			var str = this[0],
				reg = new RegExp(words,'g');
			result = str.replace(reg,'***');
			return result;
		},

		md5:function(){
		 	var str = this[0];
			function RotateLeft(lValue, iShiftBits) {
				return (lValue<<iShiftBits) | (lValue>>>(32-iShiftBits));
			}
			function AddUnsigned(lX,lY) {
				var lX4,lY4,lX8,lY8,lResult;
				lX8 = (lX & 0x80000000);
				lY8 = (lY & 0x80000000);
				lX4 = (lX & 0x40000000);
				lY4 = (lY & 0x40000000);
				lResult = (lX & 0x3FFFFFFF)+(lY & 0x3FFFFFFF);
				if (lX4 & lY4) {
					return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
				}
				if (lX4 | lY4) {
					if (lResult & 0x40000000) {
						return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
					} else {
						return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
					}
				} else {
					return (lResult ^ lX8 ^ lY8);
				}
			}
			function F(x,y,z) { return (x & y) | ((~x) & z); }
			function G(x,y,z) { return (x & z) | (y & (~z)); }
			function H(x,y,z) { return (x ^ y ^ z); }
			function I(x,y,z) { return (y ^ (x | (~z))); }
			function FF(a,b,c,d,x,s,ac) {
				a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
				return AddUnsigned(RotateLeft(a, s), b);
			};
		 
			function GG(a,b,c,d,x,s,ac) {
				a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
				return AddUnsigned(RotateLeft(a, s), b);
			};
			function HH(a,b,c,d,x,s,ac) {
				a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
				return AddUnsigned(RotateLeft(a, s), b);
			};
		 
			function II(a,b,c,d,x,s,ac) {
				a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
				return AddUnsigned(RotateLeft(a, s), b);
			};
			function ConvertToWordArray(string) {
				var lWordCount;
				var lMessageLength = string.length;
				var lNumberOfWords_temp1=lMessageLength + 8;
				var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1 % 64))/64;
				var lNumberOfWords = (lNumberOfWords_temp2+1)*16;
				var lWordArray=Array(lNumberOfWords-1);
				var lBytePosition = 0;
				var lByteCount = 0;
				while ( lByteCount < lMessageLength ) {
					lWordCount = (lByteCount-(lByteCount % 4))/4;
					lBytePosition = (lByteCount % 4)*8;
					lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount)<<lBytePosition));
					lByteCount++;
				}
				lWordCount = (lByteCount-(lByteCount % 4))/4;
				lBytePosition = (lByteCount % 4)*8;
				lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80<<lBytePosition);
				lWordArray[lNumberOfWords-2] = lMessageLength<<3;
				lWordArray[lNumberOfWords-1] = lMessageLength>>>29;
				return lWordArray;
			};
			function WordToHex(lValue) {
				var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;
				for (lCount = 0;lCount<=3;lCount++) {
					lByte = (lValue>>>(lCount*8)) & 255;
					WordToHexValue_temp = "0" + lByte.toString(16);
					WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2);
				}
				return WordToHexValue;
			};
			function Utf8Encode(string) {
				string = string.replace(/\r\n/g,"\n");
				var utftext = "";
				for (var n = 0; n < string.length; n++) {
					var c = string.charCodeAt(n);
					if (c < 128) {
						utftext += String.fromCharCode(c);
					}
					else if((c > 127) && (c < 2048)) {
						utftext += String.fromCharCode((c >> 6) | 192);
						utftext += String.fromCharCode((c & 63) | 128);
					}
					else {
						utftext += String.fromCharCode((c >> 12) | 224);
						utftext += String.fromCharCode(((c >> 6) & 63) | 128);
						utftext += String.fromCharCode((c & 63) | 128);
					}
				}
				return utftext;
			};
			var x=Array();
			var k,AA,BB,CC,DD,a,b,c,d;
			var S11=7, S12=12, S13=17, S14=22;
			var S21=5, S22=9 , S23=14, S24=20;
			var S31=4, S32=11, S33=16, S34=23;
			var S41=6, S42=10, S43=15, S44=21;
			str = Utf8Encode(str);
			x = ConvertToWordArray(str);
			a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;
			for (k=0;k<x.length;k+=16) {
				AA=a; BB=b; CC=c; DD=d;
				a=FF(a,b,c,d,x[k+0], S11,0xD76AA478);
				d=FF(d,a,b,c,x[k+1], S12,0xE8C7B756);
				c=FF(c,d,a,b,x[k+2], S13,0x242070DB);
				b=FF(b,c,d,a,x[k+3], S14,0xC1BDCEEE);
				a=FF(a,b,c,d,x[k+4], S11,0xF57C0FAF);
				d=FF(d,a,b,c,x[k+5], S12,0x4787C62A);
				c=FF(c,d,a,b,x[k+6], S13,0xA8304613);
				b=FF(b,c,d,a,x[k+7], S14,0xFD469501);
				a=FF(a,b,c,d,x[k+8], S11,0x698098D8);
				d=FF(d,a,b,c,x[k+9], S12,0x8B44F7AF);
				c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);
				b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);
				a=FF(a,b,c,d,x[k+12],S11,0x6B901122);
				d=FF(d,a,b,c,x[k+13],S12,0xFD987193);
				c=FF(c,d,a,b,x[k+14],S13,0xA679438E);
				b=FF(b,c,d,a,x[k+15],S14,0x49B40821);
				a=GG(a,b,c,d,x[k+1], S21,0xF61E2562);
				d=GG(d,a,b,c,x[k+6], S22,0xC040B340);
				c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);
				b=GG(b,c,d,a,x[k+0], S24,0xE9B6C7AA);
				a=GG(a,b,c,d,x[k+5], S21,0xD62F105D);
				d=GG(d,a,b,c,x[k+10],S22,0x2441453);
				c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);
				b=GG(b,c,d,a,x[k+4], S24,0xE7D3FBC8);
				a=GG(a,b,c,d,x[k+9], S21,0x21E1CDE6);
				d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);
				c=GG(c,d,a,b,x[k+3], S23,0xF4D50D87);
				b=GG(b,c,d,a,x[k+8], S24,0x455A14ED);
				a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905);
				d=GG(d,a,b,c,x[k+2], S22,0xFCEFA3F8);
				c=GG(c,d,a,b,x[k+7], S23,0x676F02D9);
				b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);
				a=HH(a,b,c,d,x[k+5], S31,0xFFFA3942);
				d=HH(d,a,b,c,x[k+8], S32,0x8771F681);
				c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);
				b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);
				a=HH(a,b,c,d,x[k+1], S31,0xA4BEEA44);
				d=HH(d,a,b,c,x[k+4], S32,0x4BDECFA9);
				c=HH(c,d,a,b,x[k+7], S33,0xF6BB4B60);
				b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);
				a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6);
				d=HH(d,a,b,c,x[k+0], S32,0xEAA127FA);
				c=HH(c,d,a,b,x[k+3], S33,0xD4EF3085);
				b=HH(b,c,d,a,x[k+6], S34,0x4881D05);
				a=HH(a,b,c,d,x[k+9], S31,0xD9D4D039);
				d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);
				c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);
				b=HH(b,c,d,a,x[k+2], S34,0xC4AC5665);
				a=II(a,b,c,d,x[k+0], S41,0xF4292244);
				d=II(d,a,b,c,x[k+7], S42,0x432AFF97);
				c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);
				b=II(b,c,d,a,x[k+5], S44,0xFC93A039);
				a=II(a,b,c,d,x[k+12],S41,0x655B59C3);
				d=II(d,a,b,c,x[k+3], S42,0x8F0CCC92);
				c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);
				b=II(b,c,d,a,x[k+1], S44,0x85845DD1);
				a=II(a,b,c,d,x[k+8], S41,0x6FA87E4F);
				d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);
				c=II(c,d,a,b,x[k+6], S43,0xA3014314);
				b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);
				a=II(a,b,c,d,x[k+4], S41,0xF7537E82);
				d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);
				c=II(c,d,a,b,x[k+2], S43,0x2AD7D2BB);
				b=II(b,c,d,a,x[k+9], S44,0xEB86D391);
				a=AddUnsigned(a,AA);
				b=AddUnsigned(b,BB);
				c=AddUnsigned(c,CC);
				d=AddUnsigned(d,DD);
			}
			var temp = WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);
			return temp.toLowerCase();
		},

		hasNum:function(){
			var str = this[0],
			    reg = /\d/;
			return (reg.test(str))
		},

		removeSpace:function(){
			var str = this[0],
				firstNonWhite = str.search(/\S/);
			if (firstNonWhite != -1){
				for (var i=str.length-1; i >= 0; i--){
					if (str.charAt(i).search(/\S/) != -1){
						str = str.substring(firstNonWhite, i+1);
						break;
					}
				}
			}
			return str;
		},

		toArray:function(){
			var str = this[0],arr=[];
			for(var i=0;i<str.length;i++){
				arr.push(str[i]);
			}
			return arr;
		}
	}
	yy.string.fn.init.prototype = yy.string.prototype;
}
/*------------------------------03 string end--------------------------------*/
/*------------------------------04 regExp begin------------------------------*/
if(typeof yy.regExp !== 'object'){
	yy.regExp = {
		isChinese:function(str){
			var reg = /^[\u4E00-\u9FFF]+$/;
			return reg.test(str);
		},

		isDate:function(str){
			var reg = /^\d{4}-\d{1,2}-\d{1,2}$/;
			reg.test(str);
		},

		isEmail:function(str){
			var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
			reg.test(str);
		},

		isURL:function(){
			var reg = /[http|https]:\/\/[A-Za-z0-9\.-]{3,}\.[A-Za-z]{3}/ ;
			return reg.test(str);
		}
	}
}
/*------------------------------04 regExp end--------------------------------*/
/*------------------------------05 url begin---------------------------------*/
if(typeof yy.url !== 'object'){
	yy.url={
		getQueryString:function(){
			var result =[],
				querystring = location.search.substring(1),
				reg = /([^$=]+)=([^$]*)/g,
				m;
			while(m = reg.exec(querystring)){
				result[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
			}
			return result;
		},

		getQueryArray:function(){
			var result = [],
				hash,
				hashes = window.location.href.slice(window.location.indexOf('?')+1).split('&');
			for(var i=0;i<hashes.length;i++){
				hash = hashes[i].split('=');
				result.push(hash[0]);
				result[hash[0]] = hash[1];
			}
			return result;
		},

		getUrlParam:function(name){
			var regexS = "[\\?&]"+name+"=([^&#]*)",
				regex = new RegExp( regexS ), 
			    tmpURL = window.location.href,
			    results = regex.exec( tmpURL ) ;
			if( results == null ){
				return "" ;
			}else{
				return results[1]
			}
		}
	}
}
/*------------------------------05 url end-----------------------------------*/
/*------------------------------06 query begin-------------------------------*/
if(typeof yy.query !== 'object'){
	yy.query = function(selector){
		if(document.querySelectorAll){
			return document.querySelectorAll(selector);
		}
		var idExpr = /^#([\w-]+)$/,
			tagExpr = /^([\w\*]+)$/,
			idTagExpr = /^#([\w-]+)\s([\w\*]+)$/,
			clsExpr = /^([\w\-]+)?\.([\w\-]+)/,
			idClsExpr = /^#([\w-]+)\s([\w\-]+)?\.([\w\-]+)$/,
			clsTagExpr = /^([\w\-]+)?\.([\w\-]+)\s([\w\*]+)$/;
		if(idExpr.test(selector)){
			return document.getElementById(selector.slice(1));
		}else if(tagExpr.test(selector)){
			return document.getElementsByTagName(selector);
		}else if(idTagExpr.test(selector)){
			var id = selector.split(' ')[0].slice(1),
				tag = selector.split(' ')[1];
			return document.getElementById(id).getElementsByTagName(tag);
		}else if(clsExpr.test(selector)){
			var arr = selector.split('.'),
				tag = arr[0],
				cls = arr[1],
				ele;
			if(document.getElementsByClassName){
				ele = document.getElementsByClassName(cls);
				if(tag){
					for(var i=0;i<ele.length;i++){
						if(ele[i].tagName.toLowerCase()!=tag){
							ele.splice(i,1);
						}
					}
				}
			}else{
				var all = document.getElementsByTagName(tag||"*");
				ele = filter(all,'className',cls);
			}
			return ele;
		}else if(idClsExpr.test(selector)){
			var id = selector.split(' ')[0].slice(1),
				child = selector.split(' ')[1],
				tag = child.split('.')[0],
				cls = child.split('.')[1],
				ele;

			if(document.getElementById(id).getElementsByClassName){
				ele = document.getElementById(id).getElementsByClassName(cls);
				if(tag){
					for(var i=0;i<ele.length;i++){
						if(ele[i].tagName.toLowerCase()!=tag){
							ele.splice(i,1);
						}
					}
				}
			}else{
				var all = document.getElementById(id).getElementsByTagName(tag||"*");
				ele = filter(all,'className',cls);
			}
			return ele;
		}
		function filter(all,attr,val){
			var reg = RegExp('(?:^|\\s+)' + val + '(?:\\s+|$)');
			function test(node){
				var v = attr == 'className' ? node.className : node.getAttribute(attr);
				if(v){
					if(val){
						if(reg.test(v)) return true;
					}else{
						return true;
					}
				}
				return false;
			}
			var i = -1, el, r = -1, res = [];
			while( (el = all[++i]) ){
				if(test(el)) {
					res[++r] = el;
				}
			}
			return res;			
		}
	}
}
/*------------------------------06 query end---------------------------------*/
/*------------------------------07 dom begin---------------------------------*/
if(typeof yy.dom !== 'object'){

	yy.dom = window.yy.dom = yy.$ = function(selector,context){
		return new yy.dom.fn.init(selector,context);
	}
	yy.dom.fn = yy.dom.prototype = {
		length = 0,
		init : function (selector) {
			selector = selector || document;
			var idExpr = /^#([\w-]+)$/,
				clsExpr = /^([\w\-]+)?\.([\w\-]+)/,
				tagExpr = /^([\w\*]+)$/,
				attrExpr = /^([\w\-]+)?\[([\w]+)(=(\w+))?\]/;
			
			var idTagExpr = /^#([\w-]+)\s([\w\*]+)$/,
				idClsExpr = /^#([\w-]+)\s([\w\-]+)?\.([\w\-]+)$/,
				tagClsExpr = /^([\w\*]+)\s([\w\-]+)?\.([\w\-]+)$/,
				clsTagExpr = /^([\w\-]+)?\.([\w\-]+)\s([\w\*]+)$/;
			
			
			function one(els){
				return els.length==1 ? els[0] : els;
			}
			function filter(all,attr,val){
				var reg = RegExp('(?:^|\\s+)' + val + '(?:\\s+|$)');
				function test(node){
					var v = attr == 'className' ? node.className : node.getAttribute(attr);
					if(v){
						if(val){
							if(reg.test(v)) return true;
						}else{
							return true;
						}
					}
					return false;
				}
				var i = -1, el, r = -1, res = [];
				while( (el = all[++i]) ){
					if(test(el)) {
						res[++r] = el;
					}
				}
				return res;			
			}
			if (typeof selector === "string") {
				var	ele,
					father = selector.split(" ")[0].slice(1),
					child = selector.split(" ")[1] ;
					
				if(idExpr.test(selector)){
					ele = document.getElementById(selector.substr(1,selector.length));
					if (ele) {
						this.length = 1;
						this[0] = ele;
					}
				}else if(idTagExpr.test(selector)){
					this.length = document.getElementById(father).getElementsByTagName(child).length;
					ele = document.getElementById(father).getElementsByTagName(child);
					
					for(var j=0;j<this.length;j++){
						this[j] = ele[j]	
					}
				}else if(idClsExpr.test(selector)){
					var ary = child.split('.'),
						tag = ary[0],
						cls = ary[1],
						len,
						all,
						els = [];
						
						if(document.getElementById(father).getElementsByClassName){	
							var res = document.getElementById(father).getElementsByClassName(cls);
							if(tag){
								for(var i=0,len=res.length; i<len; i++){
									res[i].tagName.toLowerCase()==tag && els.push(res[i]);
								}
								ele = els ;
								this.length = els.length;								
							}else{
								ele = res ;
								this.length = res.length;
							}
						}else{
							all = document.getElementById(father).getElementsByTagName(tag || '*');
							ele = filter(all, 'className', cls) ;
							this.length = filter(all, 'className', cls).length;	
						}

						for(var j=0;j<ele.length;j++){
							this[j] = ele[j] ;
						}
				
				}
				else if(clsExpr.test(selector)){
					var ary = selector.split('.'),
						tag = ary[0],
						cls = ary[1],
						len,
						all,
						els = [];
						
						if(document.getElementsByClassName){	
							var res = document.getElementsByClassName(cls);
							if(tag){
								for(var i=0,len=res.length; i<len; i++){
									res[i].tagName.toLowerCase()==tag && els.push(res[i]);
								}
								ele = els ;
								this.length = els.length;								
							}else{
								ele = res ;
								this.length = res.length;
							}
						}else{
							all = document.getElementsByTagName(tag || '*');
							ele = filter(all, 'className', cls) ;
							this.length = filter(all, 'className', cls).length;	
						}

						for(var j=0;j<ele.length;j++){
							this[j] = ele[j] ;
						}
				
				}else if(tagExpr.test(selector)){
					this.length = document.getElementsByTagName(selector).length;
					ele = document.getElementsByTagName(selector);
					
					for(var j=0;j<this.length;j++){
						this[j] = ele[j];
					}
				}
		
				this.context = document;
				this.selector = selector;			
				return this;
			
				}else if(typeof selector === "object"){	
					if (selector.length){
						this.length = selector.length;
						for(var j=0;j < this.length;j++){
							this[j] = selector[j] ;
						}
					}else{
						this.length = 1 ;
						this[0] = selector;			
					}
				}
		},

		parent:function(){
			var parentElement = [];
			this.each(function(){
				parentElement.push(this.parentNode);
			});
			return yy.dom(parentElement);
		},
		
		siblings:function(tagName){
			var siblings,
				tagName = tagName||'*';
			this.each(function(){
				siblings = this.parentNode.getElementsByTagName(tagName);
				for(var i=0;i<siblings.length;i++){
					if(siblings[i] === this){
						siblings.splice(i,1);
					}
				}
			}) ;
			return yy.dom(siblings);
		},

		first:function(){
			return yy.dom(this[0]);
		},

		last:function(){
			return yy.dom(this[this.length-1]);
		},

		prev:function(){
			var prevElement = [];
			var getPrevElement = function(ele){  
				var x = ele.previousSibling;  
				if(x == null) return null;  
				while (x && x.nodeType!=1){  
					x = x.previousSibling;  
				}  
				return x ; 
			} ;
			this.each(function() {
				prevElement.push(getPrevElement(this));		
			});
			return ll.dom(prevElement);
		},

		next:function(){
			var nextElement = [];
			var getNextElement = function(ele){
				var x = ele.nextSibling;
				if(x == null) return null;
				while(x && x.nodeType !=1){
					x = x.nextSibling;
				}
				return x;
			};
			this.each(function(){
				nextElement.push(getNextElement(this));
			});
			return yy.dom(nextElement);
		},

		eq:function(n){
			return yy.dom(this[n]);
		},

		gt:function(n){
			var gtElement = [];
			for(var i=n+1;i<this.length;i++){
				gtElement.push(this[i])
			}
			return yy.dom(gtElement);
		},

		lt:function(n){
			var ltElement = [];
			for(var i=n-1;i>=0;i--){
				ltElement.push(this[i])
			}
			return yy.dom(ltElement);
		},

		even:function(){
			var evenElement = [];
			for(var i=0;i<this.length;i+=2){
				evenElement.push(this[i]);
			}
			return yy.dom(evenElement);
		},

		odd:function(){
			var oddElement = [];
			for(var i=1;i<this.length;i+=2){
				oddElement.push(this[i]);
			}
			return yy.dom(oddElement);
		},

		each : function (callback, args) { 
			return yy.dom.each(this, callback, args);
		},

		empty:function(){
			this.each(function(){
				this.innerHTML='';
			});
		},

		remove:function(){
			this.each(function() {
				this.parentNode.removeChild(this);
			});
		},

		replace:function(node){
			this.each(function(){
				this.parentNode.replaceChild(node, this);
			});
		},

		before:function(node){
			this.each(fucntion(){
				this.parentNode.insertBefore(node,this);
			});
		},

		after:function(node){
			this.each(function() {
				this.parentNode.insertBefore(node,null);
			});
		},

		prepend:function(node){
			this.each(function() {
				this.insertBefore(node,this.firstChild);
			});
		},

		append:function(node){
			this.each(function() {
				this.appendChild(node);
			});
		},

		attr:function(name,value){
			if(value){
				this.each(function() {
					this.setAttribute(name,value) ;
					return this;
				});
			}else{
				this.each(function() {
					return this.getAttribute(name) ;
				});
			}
		},

		removeAttr:function(name){
			this.each(function() {
				this.removeAttribute(name) ;
			});
		},

		css:function(name, value) {
			if(value){
				this.each(function () {
					this.style[name] = value;
					return this;
				});
			}else{
				this.each(function(){
					return this.style[name];
				})
			}
		},	

		data:function(name,value){
			if(value){
				this.each(function() {
					this.setAttribute("data-" + name,value) ;
					return this;
				});
			}else{
				this.each(function() {
					return this.getAttribute("data-" + name) ;
				});
			}
		},

		addClass:function(cls){
			var me = this ;
			this.each(function() {
				if (! me.hasClass(cls)){
					this.className += " " + cls;
				}
			});
		},

		hasClass:function(cls){
			this.each(function() {
				if (this.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'))){
					return true;
				}
				return false;
			});
		},

		removeClass:function(cls){
			var me = this ;
			this.each(function() {
				if (me.hasClass(cls)){
					var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
					this.className = this.className.replace(reg,' ');
				}
			});
		},

		offset:function(direction){
			var num = [];
			this.each(function(){
				if(direction == 'top'){
					num.push(this.offsetTop);
				}else if(direction == 'left'){
					num.push(this.offsetLeft);
				}
			});
			return num;
		},

		html:function(str){
			this.each(function(){
				if(str){
					if(this.innerText){
						this.innerText = str;
					}else{
						this.textContent = str;	
					}	
					return this;			
				}else{
					if(this.innerText){
						return this.innerText;
					}else{
						return this.textContent;	
					}
				}
			});
		},

		text:function(str){
			this.each(function(){
				if(str){
					this.innerHTML = str;
					return this;
				}
				else{
					return this.innerHTML;
				}
			})
		},

		fadeIn:function(speed){
			this.each(function(){
				yy.dom(this).fadeTo(1,speed);
			})
		},

		fadeOut:function(speed){
			this.each(function(){
				yy.dom(this).fadeTo(0,speed);
			})
		},

		fadeTo:function(toAlpha,speed){
			speed > 100 ? speed = 100 : speed = speed;
			this.each(function(){
				var me = this ,
					nowAlpha = 1;
				if(me.style.display == "none"){
					nowAlpha = 0;
				}
				var getOpacity = function(){
					if(ll.browser.ie){
						if(me.style.filter){
							nowAlpha = (me.style.filter).slice(14,-1)/ 100 ;
						}
					}else{
						if(me.style.opacity){
							nowAlpha = me.style.opacity;					
						}
					}
				}
				getOpacity();
				
				var setOpacity = function(transforAlpha){
					getOpacity();
					if(nowAlpha != toAlpha){
						if(ll.browser.ie){
							me.style.filter = "alpha(opacity=" +  transforAlpha * 100 + ")";
						}else{
							me.style.opacity = transforAlpha;	
						}
					}
				}
				var	timer = setInterval (function(){
					if(toAlpha == 1){
						ll.dom(me).show();
					}
					if ( nowAlpha < toAlpha){
						nowAlpha = nowAlpha - 0 + speed/1000;
						setOpacity(nowAlpha);
					}else if(nowAlpha > toAlpha){
						nowAlpha = nowAlpha - speed/1000;
						setOpacity(nowAlpha);
					}else{
						if(toAlpha == 0){
							ll.dom(me).hide();
						}
						clearInterval(timer);
					}
				},16);
			});
		},

		show:function(){
			this.each(function(){
				this.style.display = 'block';
			});
		},

		hide:function(){
			this.each(function(){
				this.style.display = 'none';
			});
		},

		toggle:function(){
			this.each(function() {
				if (this.style.display == "none"){
					this.style.display = "block" ;
				}else{
					this.style.display = "none" ;	
				}
			});
		},

		on:function(type,fun){
			var me = this;
			this.each(function(i){
				yy.eventUtil.addHandler(me[i],type,fun);
			});
			return this;
		}
	}
	yy.dom.fn.init.prototype = yy.dom.prototype;	
	yy.dom.each = function (object, callback, args) {
		var i = 0, length = object.length;
		if (args === undefined) {
			for (var value = object[0];i < length && callback.call(value, i, value) !== false;value = object[++i]){}
		}else{
			for (; i < length; ) {
				if (callback.apply(object[i++], args) === false) {
					break;
				}
			}
		}
	}
}
/*------------------------------07 dom end-----------------------------------*/
/*------------------------------08 eventUtil begin---------------------------*/
if(typeof yy.eventUtil !== 'object'){
	yy.eventUtil = {
		addHandler:function(ele,type,fun){
			if (ele.addEventListener) {
				ele.addEventListener(type, fun, false);
			}else if(ele.attachEvent){
				ele.attachEvent('on' + type, fun);
			}else{
				ele["on"+ type ] = fun;
			}
		},

		removeHandler:function(ele,type,fun){
			if (ele.removeEventListener) {
				ele.removeEventListener(type, fun, false);
			}else if(ele.detachEvent){
				ele.detachEvent('on'+ type,fun);
			}else{
				ele["on"+type] = null;
			}
		},

		getEvent:function(event){
			return event ? event : window.event;
		},

		getTarget:function(event){
			return event.target || event.srcElement;
		},

		preventDefault:function(event){
			if(event.preventDefault){
				event.preventDefault;
			}else{
				event.returnValue = false;
			}
		},

		stopPropagation:function(event){
			if(event.stopProgation){
				event.stopProgation;
			}else{
				event.cancalBubble = true;
			}
		}
	}
}
/*------------------------------08 eventUtil end-----------------------------*/
/*------------------------------09 browser begin-----------------------------*/
if(typeof yy.browser !== 'object'){
	yy.browser = { 
		core:function(){
			var type = (
				/*@cc_on!@*/ 0 ? 'msie' :
				window.chrome ? 'chrome' :
				window.opera ? 'opera' :
				window.MouseScrollEvent ? 'gecko' :
				window.WheelEvent ? 'safari' :
				'unknown'
			);
			return type;
		},

		version:function(){
			var Sys = {},
				ua = navigator.userAgent.toLowerCase(),
				s,
				result;
			(s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
			(s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
			(s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
			(s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
			(s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
			if (Sys.ie) {
				result = 'ie ' + Sys.ie ;
			}else if (Sys.firefox){
				result ='firfox ' + Sys.firefox ;
			}else if (Sys.chrome){ 
				result = 'chrome ' + Sys.chrome ;
			}else if (Sys.opera){ 
				result ='opera ' + Sys.opera ;
			}else if (Sys.safari){ 
				result = 'safari ' + Sys.safari ;
			}else{
				result = 'other browser' ;
			}
			return result;	
		},

		chrome : /chrome\/(\d+\.\d+)/i.test(navigator.userAgent) ? + RegExp['\x241'] : undefined,
		firefox : /firefox\/(\d+\.\d+)/i.test(navigator.userAgent) ? + RegExp['\x241'] : undefined,
		IE : /msie (\d+\.\d+)/i.test(navigator.userAgent) ? (document.documentMode || + RegExp['\x241']) : undefined,
		opera : /opera(\/| )(\d+(\.\d+)?)(.+?(version\/(\d+(\.\d+)?)))?/i.test(navigator.userAgent) ?  + ( RegExp["\x246"] || RegExp["\x242"] ) : undefined,
		safari : /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(navigator.userAgent) && !/chrome/i.test(navigator.userAgent) ? + (RegExp['\x241'] || RegExp['\x242']) : undefined,
		isGecko : /gecko/i.test(navigator.userAgent) && !/like gecko/i.test(navigator.userAgent),
		isWebkit : /webkit/i.test(navigator.userAgent)
	}
}
/*------------------------------09 browser end-------------------------------*/
/*------------------------------10 platform begin----------------------------*/
if(typeof yy.platform !== 'object'){
	yy.platform = {
		isMobile : !!navigator.userAgent.match(/AppleWebKit.*Mobile.*/) || !!navigator.userAgent.match(/AppleWebKit/),
		isAndroid : /android/i.test(navigator.userAgent),
		isIpad : /ipad/i.test(navigator.userAgent),
		isIphone : /iphone/i.test(navigator.userAgent),
		isMac : /macintosh/i.test(navigator.userAgent),
		isWindows : /windows/i.test(navigator.userAgent)
	}
}
/*------------------------------10 platform end------------------------------*/
/*------------------------------11 ajax begin--------------------------------*/
if (typeof yy.ajax !== 'object'){
	yy.ajax = {
		_xmlHttp : function(){ 
			return new (window.ActiveXObject||window.XMLHttpRequest)("Microsoft.XMLHTTP");
		},
		_AddEvent : function(xhp,fun,format){
			xhp.onreadystatechange=function(){
				if(xhp.readyState == 4 && xhp.status == 200){
					var tmp = "" ;
					if(format){
						switch (format){
							case 'text':
								tmp = xhp.responseText;
								break;
							case 'json':
								tmp = eval('(' + xhp.responseText + ')');
								break;
							case 'xml':
								tmp = xhp.responseXML;
								break;
						}
					}else{
						tmp = eval('(' + xhp.responseText + ')');	
					}
					fun(tmp);
				}
			}	
		},
		get : function(url,fun,format,bool){
			var _xhp = ll.ajax._xmlHttp();	
			ll.ajax._AddEvent(_xhp, fun || function(){}, format);
			_xhp.open("GET",url,bool);
			_xhp.send(null);	
		},
		post : function(url,data,fun,format,bool){	
			var _xhp = ll.ajax._xmlHttp();	
			ll.ajax._AddEvent(_xhp, fun || function(){}, format);
			_xhp.open("POST",url,bool);
			_xhp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			_xhp.send(data);
		}
	}
}
/*------------------------------11 ajax end----------------------------------*/
/*------------------------------12 view begin------------------------------*/
if (typeof yy.view !== 'object'){
	yy.view = {
		getHeight : function () {
			var doc = document,
			body = doc.body,
			html = doc.documentElement,
			client = doc.compatMode == 'BackCompat' ? body : doc.documentElement;
			return Math.max(html.scrollHeight, body.scrollHeight, client.clientHeight);
		},

		getWidth : function () {
			var doc = document,
			body = doc.body,
			html = doc.documentElement,
			client = doc.compatMode == 'BackCompat' ? body : doc.documentElement;
			return Math.max(html.scrollWidth, body.scrollWidth, client.clientWidth);
		},

		getScrollLeft : function () {;
			return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft;
		},

		getScrollTop : function () {
			return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop ;
		},

		getViewHeight : function () {
			var doc = document,
			client = doc.compatMode == 'BackCompat' ? doc.body : doc.documentElement;
			return client.clientHeight;
		},
		getViewWidth : function () {
			var doc = document,
			client = doc.compatMode == 'BackCompat' ? doc.body : doc.documentElement;
			return client.clientWidth;
		},
		
		rollTo : function(endElementId,speed){
			var nowScrollY = window.scrollY,
				endPoint = document.getElementById(endElementId.substr(1)).offsetTop;
			if(nowScrollY != endPoint){
				speed ? speed : 50 ;
				for(var i = 1; i < speed; i*=10){
					if (speed/i < 10 ) {
						break;
					}
				}	
				if(endPoint > speed){
					var	timer = setInterval (function(){
						if ( nowScrollY < endPoint - i || nowScrollY > endPoint + i){
							if(nowScrollY < endPoint){
								nowScrollY = nowScrollY + speed ;
							}else if(nowScrollY > endPoint){
								nowScrollY = nowScrollY - speed ;
							}
							window.scroll(0, nowScrollY);
						}else{
							clearInterval(timer);
						}
					},16);	
				}else{
					window.scroll(0, endPoint);	
				}
			}
		},

		rollToBottom : function(speed){
			var nowScrollY = window.scrollY,
				pageHeight = document.body.scrollHeight,
				timer = setInterval (function(){
					if ( nowScrollY <= pageHeight ){
						nowScrollY = nowScrollY + ( speed ? speed : 50 );
						window.scroll(0, nowScrollY);
					}else{
						clearInterval(timer);	
					}
				},16);
		},

		rollToTop : function(speed){
			var nowScrollY = window.scrollY;
			if(nowScrollY > 0 ){
				var	timer = setInterval (function(){
					if ( nowScrollY >=0 ){
						nowScrollY = nowScrollY - ( speed ? speed : 50 )  ;
						window.scroll(0, nowScrollY);
					}else{
						clearInterval(timer);
					}
				},16);
			}
		}
	}
}
/*------------------------------12 view end--------------------------------*/
