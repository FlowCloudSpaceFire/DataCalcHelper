<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<% String root = request.getContextPath();%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>IP 计算</title>
<link rel="stylesheet" type="text/css" href="<%=root %>/res/css/a.css" />
<link rel="stylesheet" type="text/css" href="<%=root %>/res/css/control.css" />
<link rel="stylesheet" type="text/css" href="<%=root %>/res/css/view.css" />
<link rel="stylesheet" type="text/css" href="<%=root %>/res/css/page/ip.css" />
<script type="text/javascript" src="<%=root%>/res/js/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="<%=root%>/res/js/common.js"></script>
<script type="text/javascript" src="<%=root%>/res/js/page.js"></script>
<script type="text/javascript" src="<%=root%>/res/js/page/ip.js"></script>
</head>
<body class="x-body">
	<!-- ( •̀ ω •́ ) -->
	
	<div class="x-container">
		
		<!-- 广告页1 -->
		<div class="x-ad-container1">
			<img class="x-image" src="<%=root%>/res/img/ads/whjy_1.jpg" />
		</div>
		
		<!-- 空着 -->
		<div class="x-blank">
		</div>
		
		<div class="x-toolstrip">			
		</div>
		
		<!-- 内容页 -->
		<div class="x-tool-content">
		
		    <div id="div_ip_option">
		     	<label>选择 IP 地址分配类型&emsp;&emsp;: </label>
		     	<select name="ipoption" id="cmb_ipoption" class="x-cmb1" >
					<option value=0 selected>未分配 IP 地址</option>
					<option value=1>已分配 IP 地址</option>
				</select>
		    </div>
		    
		    <div id="div_ip_value" class="x-dis-none">
		    	<label>输入已分配的 IP 地址&emsp;&emsp;: </label>
		    	<input id="txt_ip1" type="text" style="width:36px;" maxlength=3 oninput="value=value.replace(/[^\d]/g,'')" />
		    	<span>.</span>
		    	<input id="txt_ip2" type="text" style="width:36px;" maxlength=3 oninput="value=value.replace(/[^\d]/g,'')" />
		    	<span>.</span>
		    	<input id="txt_ip3" type="text" style="width:36px;" maxlength=3 oninput="value=value.replace(/[^\d]/g,'')" />
		    	<span>.</span>
		    	<input id="txt_ip4" type="text" style="width:36px;" maxlength=3 oninput="value=value.replace(/[^\d]/g,'')" />
		    </div>
		    
		    <div id="div_ip_count">
		    	<label>输入需要获取的  IP 数量&emsp;: </label>
		    	<input id="txt_ip_num" type="text" style="width:96px;" maxlength=5 oninput="value=value.replace(/[^\d]/g,'')" />
		    </div>
		    
			<div id="div_ip_operate">
				<button id="btn_calc" class="x-btn1">计算</button>
				<button id="btn_reset" class="x-btn1">重置</button>
			</div>
			
			<div id="div_ip_result">
				<textarea id="rtxt_ip_result">
				</textarea>
			</div>
			
		</div>
		
		<!-- 空着 -->
		<div class="x-blank">
		</div>
		
		<div class="x-ad-container2">
			<img class="x-image" src="<%=root%>/res/img/ads/whjy_2.jpg" />
		</div>
		
	</div>
	
	<script type="text/javascript">
	
	var root = "<%= root%>";
	
	</script>
	
</body>
</html>