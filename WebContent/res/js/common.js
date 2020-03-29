/////////////////////////////////////////////////////////////////////////////////////////
var EventUtils = {
	addEvent: function(element,type,handle) {
		if(element.addEventListener) {
			element.addEventListener(type,handle);
		}else if(element.attachEvent) {
			element.attachEvent("on" + type,handle);
		}else {
			element["on" + type] = handle;
		}
	},
	removeEvent: function(element,type,handle) {
		if(element.removeEventListener) {
			element.removeListener(type, handle);
		}else if(element.detachEvent) {
			element.detachEvent("on" + type, handle);
		}else {
			element["on" + type] = null;
		}
	}
}

/////////////////////////////////////////////////////////////////////////////////////////

String.prototype.endWith = function(s){
  if(s == null || s == "" || this.length == 0 || s.length > this.length){
	  return false;
  }

  if(this.substring(this.length - s.length) == s){
	  return true;
  } else {
	  return false;
  }
}

String.prototype.startWith = function(s){
  if(s == null || s == "" || this.length == 0 || s.length > this.length){
	  return false;
  }   
  if(this.substr(0, s.length) == s){
	  return true;  
  }else{
	  return false;
  }
  return true;
}

String.prototype.format = function () {
  const e = arguments;
  return !!this && this.replace(/\{(\d+)\}/g, function (t, r) {
	  return e[r];
  });
}

/////////////////////////////////////////////////////////////////////////////////////////

// date 的一些原型方法

Date.prototype.format = function(fmt){
	 var o = {  
	     "M+": this.getMonth() + 1, //月份   
		 "d+": this.getDate(), //日   
		 "H+": this.getHours(), //小时   
		 "m+": this.getMinutes(), //分   
		 "s+": this.getSeconds(), //秒   
		 "q+": Math.floor((this.getMonth() + 3) / 3), //季度   
		 "S": this.getMilliseconds() //毫秒   
	 };  
	 if (/(y+)/.test(fmt)) {
		 fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));  
	 }
	 for (var k in o) {
		 if (new RegExp("(" + k + ")").test(fmt)) {
			 fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) 
					 ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));  
		 }	 
	 }

	 return fmt;  
}

// 时间转为 utc 秒数
Date.prototype.toUtcSeconds = function() {
	var year = this.getUTCFullYear();
	var month = this.getUTCMonth();
	var day = this.getUTCDate();
	var hour = this.getUTCHours();
	var minute = this.getUTCMinutes();
	var second = this.getUTCSeconds();
	var utc = Date.UTC(year, month, day, hour, minute, second, 0);
	return Math.floor(utc / 1000);
}

//时间转为 utc 毫秒数
Date.prototype.toUtcMillions = function(){
	var year = this.getUTCFullYear();
	var month = this.getUTCMonth();
	var day = this.getUTCDate();
	var hour = this.getUTCHours();
	var minute = this.getUTCMinutes();
	var second = this.getUTCSeconds();
	var millisec = this.getUTCMilliseconds();
	var utc = Date.UTC(year, month, day, hour, minute, second, millisec);
	return utc;
}

/////////////////////////////////////////////////////////////////////////////////////////

