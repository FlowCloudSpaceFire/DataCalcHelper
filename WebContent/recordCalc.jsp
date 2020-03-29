<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<% String root = request.getContextPath();%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>录像存储计算</title>
<link rel="stylesheet" type="text/css" href="<%=root %>/res/css/a.css" />
<link rel="stylesheet" type="text/css" href="<%=root %>/res/css/control.css" />
<link rel="stylesheet" type="text/css" href="<%=root %>/res/css/page/record.css" />
<link rel="stylesheet" type="text/css" href="<%=root %>/res/css/view.css" />
<script type="text/javascript" src="<%=root%>/res/js/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="<%=root%>/res/js/common.js"></script>
<script type="text/javascript" src="<%=root%>/res/js/page.js"></script>
<script type="text/javascript" src="<%=root%>/res/js/page/record.js"></script>
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
			<div id="div_calc_condition">
				<label>计算条件选择&emsp;&emsp;: </label>
				<select name="calc_con_option" id="cmb_calc_con_option" class="x-cmb1" >
					<option value=0 selected>按码率计算</option>
					<option value=1>按分辨率计算</option>
				</select>
			</div>
			
			<div id="div_calc_bitrate" class="x-dis-block">
				
				<label>计算方向选择&emsp;&emsp;: </label>
				<select name="calc_dir_option" id="cmb_br_calc_dir_option" class="x-cmb1" >
					<option value=0 selected>计算录像大小</option>
					<option value=1>计算录像时间</option>
					<option value=2>计算码率大小</option>
				</select>
				
				<br/><br/>
				
				<div id="div_br_1" class="x-dis-block">
					<label>码率输入&emsp;&emsp;&emsp;&emsp;: </label>
					<input id="txt_br_1_br_m" class="x-text1" type="text" style="width:60px" maxlength=5 oninput="value=value.replace(/[^\d]/g,'')"/>
					<label>(Mbps)</label>
					<input id="txt_br_1_br_k" class="x-text1" type="text" style="width:60px" maxlength=5 oninput="value=value.replace(/[^\d]/g,'')"/>
					<label>(Kbps)</label>
					
					<br/><br/>
					
					<label>摄像头数量&emsp;&emsp;&emsp;: </label>
					<input id="txt_br_1_cam_num" class="x-text1" type="text" oninput="value=value.replace(/[^\d]/g,'')"/>
					<label>(个)</label>
					
					<br/><br/>
					<label>存储时间&emsp;&emsp;&emsp;&emsp;: </label>
					<input id="txt_br_1_store_time" class="x-text1" type="text" oninput="value=value.replace(/[^\d]/g,'')"/>
					<label>(小时)</label>
				</div>
				
				<div id="div_br_2" class="x-dis-none">
					<label>码率输入&emsp;&emsp;&emsp;&emsp;: </label>
					<input id="txt_br_2_br_m" class="x-text1" type="text" style="width:60px" maxlength=5 oninput="value=value.replace(/[^\d]/g,'')"/>
					<label>(Mbps)</label>
					<input id="txt_br_2_br_k" class="x-text1" type="text" style="width:60px" maxlength=5 oninput="value=value.replace(/[^\d]/g,'')"/>
					<label>(Kbps)</label>
					
					<br/><br/>
					
					<label>硬盘总容量&emsp;&emsp;&emsp;: </label>
					<input id="txt_br_2_disk_size" class="x-text1" type="text" oninput="value=value.replace(/[^\d]/g,'')"/>
					<label>(G)</label>
					
					<br/><br/>
					<label>摄像头数量&emsp;&emsp;&emsp;: </label>
					<input id="txt_br_2_cam_num" class="x-text1" type="text" oninput="value=value.replace(/[^\d]/g,'')"/>
					<label>(个)</label>
				</div>
				
				<div id="div_br_3" class="x-dis-none">
					<label>硬盘总容量&emsp;&emsp;&emsp;: </label>
					<input id="txt_br_3_disk_size" class="x-text1" type="text" oninput="value=value.replace(/[^\d]/g,'')"/>
					<label>(G)</label>
					
					<br/><br/>
					
					<label>摄像头数量&emsp;&emsp;&emsp;: </label>
					<input id="txt_br_3_cam_num" class="x-text1" type="text" oninput="value=value.replace(/[^\d]/g,'')"/>
					<label>(个)</label>
					
					<br/><br/>
					<label>存储时间&emsp;&emsp;&emsp;&emsp;: </label>
					<input id="txt_br_3_store_time" class="x-text1" type="text" oninput="value=value.replace(/[^\d]/g,'')"/>
					<label>(小时)</label>
				</div>
				
			</div>
			
			<div id="div_calc_resolution" class="x-dis-none">
				<label>计算方式选择&emsp;&emsp;: </label>
				<select name="calc_type_option" id="cmb_re_calc_type_option" class="x-cmb1" >
					<option value=0 selected>计算录像大小</option>
					<option value=1>计算录像时间</option>
				</select>
				
				<br/><br/>
				
				<div id="div_re_1" class="x-dis-block">
				
					<label>视频编码类型&emsp;&emsp;: </label>
					<select name="re_1_calc_encode_option" id="cmb_re_1_calc_encode_option" class="x-cmb1" >
						<option value=0 selected>H264</option>
						<option value=1>H265</option>
					</select>
					
					<br/><br/>
					
					<label>分辨率类型&emsp;&emsp;&emsp;: </label>
					<select name="re_1_calc_resolution_option" id="cmb_re_1_calc_resolution_option" class="x-cmb1" >
						<option value=0>D1</option>
						<option value=1 selected>720P</option>
						<option value=2>960P</option>
						<option value=3>1080P</option>
						<option value=4>3MP</option>
						<option value=5>4MP</option>
						<option value=6>5MP</option>
						<option value=7>6MP</option>
						<option value=8>8MP</option>
						<option value=9>16MP</option>
					</select>
					<input id="txt_re_1_res_br" class="x-text1" type="text" style="width:60px" oninput="value=value.replace(/[^\d\.]/g,'')"/>
					<label>(Mb)</label>
					
					<br/><br/>
					
					<label>摄像头数量&emsp;&emsp;&emsp;: </label>
					<input id="txt_re_1_cam_num" class="x-text1" type="text" oninput="value=value.replace(/[^\d]/g,'')"/>
					<label>(个)</label>
					
					<br/><br/>
					<label>存储时间&emsp;&emsp;&emsp;&emsp;: </label>
					<input id="txt_re_1_store_time" class="x-text1" type="text" oninput="value=value.replace(/[^\d]/g,'')"/>
					<label>(小时)</label>
					
				</div>
				
				<div id="div_re_2" class="x-dis-none">
					
					<label>视频编码类型&emsp;&emsp;: </label>
					<select name="re_2_calc_encode_option" id="cmb_re_2_calc_encode_option" class="x-cmb1" >
						<option value=0 selected>H264</option>
						<option value=1>H265</option>
					</select>
					
					<br/><br/>
					
					<label>分辨率类型&emsp;&emsp;&emsp;: </label>
					<select name="re_2_calc_resolution_option" id="cmb_re_2_calc_resolution_option" class="x-cmb1" >
						<option value=0>D1</option>
						<option value=1 selected>720P</option>
						<option value=2>960P</option>
						<option value=3>1080P</option>
						<option value=4>3MP</option>
						<option value=5>4MP</option>
						<option value=6>5MP</option>
						<option value=7>6MP</option>
						<option value=8>8MP</option>
						<option value=9>16MP</option>
					</select>
					<input id="txt_re_2_res_br" class="x-text1" type="text" style="width:60px" oninput="value=value.replace(/[^\d\.]/g,'')"/>
					<label>(Mb)</label>
					
					<br/><br/>
					
					<label>硬盘总容量&emsp;&emsp;&emsp;: </label>
					<input id="txt_re_2_disk_size" class="x-text1" type="text" oninput="value=value.replace(/[^\d]/g,'')"/>
					<label>(G)</label>
					
					<br/><br/>
					<label>摄像头数量&emsp;&emsp;&emsp;: </label>
					<input id="txt_re_2_cam_num" class="x-text1" type="text" oninput="value=value.replace(/[^\d]/g,'')"/>
					<label>(个)</label>
				</div>
				
			</div>
			
			<div id="div_record_operate">
				<button id="btn_calc" class="x-btn1">计算</button>
				<button id="btn_reset" class="x-btn1">重置</button>
			</div>
			
			<div id="div_record_result">
				<textarea id="rtxt_record_result">
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