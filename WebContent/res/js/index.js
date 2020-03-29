$(document).ready(function(){
	
	// init toolstrip
	fnInitTools(root);
	
})

function fnInitTools(rootPath){
	
	var tc = $(".x-tools-container");
	if(null == tc) return;
	
	tc.empty();
	
	var list = ["record", "bandwidth", "ups", "screen", "focus", "ip"];
	var cnlist = ["录像存储计算", "网络带宽计算", "UPS 计算", "拼接屏计算", "相机焦距计算", "IP 计算"];
	
	$.each(list, function(i, name){	
		
		/*
		  <div class="x-tool-item">
		  	<div class="x-tool-item-head">
		  	  <a class="x-a-text" href="xx.html">xx</a>
		  	</div>
		  	<div class="x-tool-item-body">
		  	  <a href="xx.html">
		  	    <img class="x-image" src="xx.png" alt="xx"  />
		  	  </a>
		  	</div>
		  </div>
		 */
		
		var item = $("<div></div>");
		item.addClass("x-tool-item");
		
		var head = $("<div></div>");
		head.addClass("x-tool-item-head");
		
		var a1 = $("<a></a>")
		a1.addClass("x-a-text");
		a1.attr("href", rootPath + "/center/" + name + ".html");
		a1.text(cnlist[i]);
		
		head.append(a1);
		
		var body = $("<div></div>");
		body.addClass("x-tool-item-body");
					
		var a2 = $("<a></a>")
		a2.attr("href", rootPath + "/center/" + name + ".html");	
		var img = $("<img />");
		img.addClass("x-image");
		img.attr("src", rootPath + "/res/img/items/" + name + ".png");
		img.attr("alt", cnlist[i]);	
		a2.append(img);
		
		body.append(a2);
		
		item.append(head);
		item.append(body);
		tc.append(item);
	});
}