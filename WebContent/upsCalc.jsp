<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<% String root = request.getContextPath();%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>UPS 计算</title>
<link rel="stylesheet" type="text/css" href="<%=root %>/res/css/a.css" />
<link rel="stylesheet" type="text/css" href="<%=root %>/res/css/control.css" />
<link rel="stylesheet" type="text/css" href="<%=root %>/res/css/view.css" />
<link rel="stylesheet" type="text/css" href="<%=root %>/res/css/page/ups.css" />
<script type="text/javascript" src="<%=root%>/res/js/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="<%=root%>/res/js/common.js"></script>
<script type="text/javascript" src="<%=root%>/res/js/page.js"></script>
<script type="text/javascript" src="<%=root%>/res/js/page/ups.js"></script>
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
			<div id="div_ups_params">
				<label>设备负载总功率&emsp;&emsp;: </label>
				<input id="txt_total_power" class="x-text1" type="text" oninput="value=value.replace(/[^\d]/g,'')" />
				<label>(W)</label>
				<br/><br/>
				<label>设备后备时间&emsp;&emsp;&emsp;: </label>
				<input id="txt_total_hour" class="x-text1" type="text" oninput="value=value.replace(/[^\d\.]/g,'')" />
				<label>(小时)</label>
				<br/><br/>
				<label>电池组节数&emsp;&emsp;&emsp;&emsp;: </label>
				<input id="txt_group_num" class="x-text1" type="text" oninput="value=value.replace(/[^\d]/g,'')" />
				<label>(节)</label>
				<br/><br/>
				<label>电池电压值&emsp;&emsp;&emsp;&emsp;: </label>
				<input id="txt_power_v" class="x-text1" type="text" oninput="value=value.replace(/[^\d]/g,'')" />
				<label>(V)</label>
			</div>
			
			<div id="div_ups_operate">
				<button id="btn_calc" class="x-btn1">计算</button>
				<button id="btn_reset" class="x-btn1">重置</button>
			</div>
			
			<div id="div_ups_result">
				<textarea id="rtxt_ups_result">
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