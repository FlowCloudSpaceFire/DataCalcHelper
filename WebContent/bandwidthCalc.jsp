<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<% String root = request.getContextPath();%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>网络带宽计算</title>
<link rel="stylesheet" type="text/css" href="<%=root %>/res/css/a.css" />
<link rel="stylesheet" type="text/css" href="<%=root %>/res/css/control.css" />
<link rel="stylesheet" type="text/css" href="<%=root %>/res/css/view.css" />
<link rel="stylesheet" type="text/css" href="<%=root %>/res/css/page/bandwidth.css" />
<script type="text/javascript" src="<%=root%>/res/js/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="<%=root%>/res/js/common.js"></script>
<script type="text/javascript" src="<%=root%>/res/js/page.js"></script>
<script type="text/javascript" src="<%=root%>/res/js/page/bandwidth.js"></script>
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
			<div id="div_bw_params">
				<label>请输入相机码流大小&emsp;: </label>
				<input id="txt_bitrate" class="x-text1" type="text" oninput="value=value.replace(/[^\d]/g,'')" />
				<label>(kbps)</label>
				<br/><br/>
				<label>请输入相机数量&emsp;&emsp;&emsp;: </label>
				<input id="txt_camera_num" class="x-text1" type="text" oninput="value=value.replace(/[^\d]/g,'')" />
				<br/><br/>
				<label>请输入最大带宽&emsp;&emsp;&emsp;: </label>
				<input id="txt_max_bw" class="x-text1" type="text" oninput="value=value.replace(/[^\d]/g,'')" />
				<label>(Mb)</label>
			</div>
			
			<div id="div_bw_operate">
				<button id="btn_calc" class="x-btn1">计算</button>
				<button id="btn_reset" class="x-btn1">重置</button>
			</div>
			
			<div id="div_bw_result">
				<textarea id="rtxt_bw_result">
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