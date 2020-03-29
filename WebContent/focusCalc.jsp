<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<% String root = request.getContextPath();%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>相机焦距计算</title>
<link rel="stylesheet" type="text/css" href="<%=root %>/res/css/a.css" />
<link rel="stylesheet" type="text/css" href="<%=root %>/res/css/control.css" />
<link rel="stylesheet" type="text/css" href="<%=root %>/res/css/view.css" />
<link rel="stylesheet" type="text/css" href="<%=root %>/res/css/page/focus.css" />
<script type="text/javascript" src="<%=root%>/res/js/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="<%=root%>/res/js/common.js"></script>
<script type="text/javascript" src="<%=root%>/res/js/page.js"></script>
<script type="text/javascript" src="<%=root%>/res/js/page/focus.js"></script>
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
			<div id="div_focus_params">
				<label>选择计算类型&emsp;&emsp;: </label>
				<select name="type_option" id="cmb_type_option" class="x-cmb1" >
					<option value=0 selected>计算镜头焦距</option>
					<option value=1>计算物体距离</option>
				</select>
				<br/><br/>
				<label>选择镜头规格&emsp;&emsp;: </label>
				<select name="jt_option" id="cmb_jt_option" class="x-cmb1" >
					<option value=0 selected>1/4</option>
					<option value=1>1/3</option>
					<option value=2>1/2</option>
					<option value=3>2/3</option>
					<option value=4>1</option>
				</select>
				<br/><br/>
				<label id="lbl_dis">物体与镜头距离&emsp;: </label>
				<input id="txt_dis" class="x-text1" type="text" maxlength=5 oninput="value=value.replace(/[^\d\.]/g,'')"/>
				<label id="lbl_dis_unit">(米)</label>
				<br/><br/>
				<label>被摄物体宽高&emsp;&emsp;: </label>
				<select name="obj_option" id="cmb_obj_option" class="x-cmb1" style="width: 60px" >
					<option value=0 selected>宽</option>
					<option value=1>高</option>
				</select>
				<input id="txt_obj_param" class="x-text1" type="text" maxlength=5 oninput="value=value.replace(/[^\d\.]/g,'')"/>
				<label>(米)</label>
			</div>
			
			<div id="div_focus_operate">
				<button id="btn_calc" class="x-btn1">计算</button>
				<button id="btn_reset" class="x-btn1">重置</button>
			</div>
			
			<div id="div_focus_result">
				<textarea id="rtxt_focus_result">
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