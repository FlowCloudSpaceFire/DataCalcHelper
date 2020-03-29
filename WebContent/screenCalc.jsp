<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<% String root = request.getContextPath();%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>拼接屏计算</title>
<link rel="stylesheet" type="text/css" href="<%=root %>/res/css/a.css" />
<link rel="stylesheet" type="text/css" href="<%=root %>/res/css/control.css" />
<link rel="stylesheet" type="text/css" href="<%=root %>/res/css/view.css" />
<link rel="stylesheet" type="text/css" href="<%=root %>/res/css/page/screen.css" />
<script type="text/javascript" src="<%=root%>/res/js/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="<%=root%>/res/js/common.js"></script>
<script type="text/javascript" src="<%=root%>/res/js/page.js"></script>
<script type="text/javascript" src="<%=root%>/res/js/page/screen.js"></script>
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
		
			<div id="div_sc_params">			
				<label>选择拼接屏宽高比&emsp;: </label>
				<select name="sc_option" id="cmb_sc_option" class="x-cmb1" >
					<option value=0 selected>4 : 3</option>
					<option value=1>16 : 9</option>
				</select>
				<br/><br/>
				<label>输入拼接屏尺寸&emsp;&emsp;: </label>
				<input id="txt_sc_size" class="x-text1" type="text" maxlength=3 oninput="value=value.replace(/[^\d]/g,'')"/>
				<label>(英寸)</label>
				<br/><br/>
				<label>屏幕墙宽度&emsp;&emsp;&emsp;&emsp;:</label>
				<input id="txt_scwall_width" class="x-text1" type="text"  maxlength=3 oninput="value=value.replace(/[^\d\.]/g,'')"/>
				<label>(米)</label>
				<br/><br/>
				<label>屏幕墙高度&emsp;&emsp;&emsp;&emsp;:</label>
				<input id="txt_scwall_height" class="x-text1" type="text"  maxlength=3 oninput="value=value.replace(/[^\d\.]/g,'')"/>
				<label>(米)</label>
			</div>
			
			<div id="div_sc_operate">
				<button id="btn_calc" class="x-btn1">计算</button>
				<button id="btn_reset" class="x-btn1">重置</button>
			</div>
			
			<div id="div_sc_result">
				<textarea id="rtxt_sc_result">
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