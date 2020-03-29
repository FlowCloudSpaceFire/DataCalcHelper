
$(document).ready(function(){
	
	// init toolstrip
	fnInitToolStrip(root);
	
})

function fnInitToolStrip(rootPath){
	var ts = $(".x-toolstrip");
	if(null == ts) return;
	
	ts.empty();
	
	var list = ["home", "record", "bandwidth", "ups", "screen", "focus", "ip"];
	var cnlist = ["回到主页", "录像存储计算", "网络带宽计算", "UPS 计算", "拼接屏计算", "相机焦距计算", "IP 计算"];
	
	$.each(list, function(i, name){	
		
		/*
		 <div class="x-tooltrip-item">
		   	<a href="xx.html">
				<img class="x-image" src="xx.png" alt="xx" title="xx" />
		 	</a>
		 </div>
		 */
		
		var tsim = $("<div></div>");
		tsim.addClass("x-toolstrip-item");
		
		var a = $("<a></a>")
		a.attr("href", rootPath + "/center/" + name + ".html");
		
		var img = $("<img />");
		img.addClass("x-image");
		img.attr("src", rootPath + "/res/img/items/" + name + ".png");
		img.attr("alt", cnlist[i]);
		img.attr("title", cnlist[i]);
		
		a.append(img);
		
		tsim.append(a);
		
		ts.append(tsim);
	});
}
