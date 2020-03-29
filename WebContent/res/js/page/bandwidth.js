
$(document).ready(function(){
	
	EventUtils.addEvent($("#btn_calc")[0], "click", function(){
		fnCalc();
	});
	
	EventUtils.addEvent($("#btn_reset")[0], "click", function(){
		$("#txt_bitrate").val("");
		$("#txt_camera_num").val("");
		$("#rtxt_bw_result").val("");
	});
})

function fnCalc(){
	var kbps_str = $("#txt_bitrate").val();
	var num_str = $("#txt_camera_num").val();
	if("" == kbps_str || "" == num_str){
		alert("请输入相机码流大小和相机数量!");
		return;
	}
	
	var bw = parseInt(kbps_str) * parseInt(num_str);
	if(0 >= bw){
		alert("请输入正确相机码流大小和相机数量!");
		return;
	} 

	var text = "计算结果仅供参考\r\n\r\n所需要带宽大小 : {0} kbps, 即 {1} 兆带宽".format(
			bw, 
			Math.ceil(bw / 1024));
	
	var max_bw_str = $("#txt_max_bw").val();
	if("" != max_bw_str){
		var max_bw = parseInt(max_bw_str);
		if(parseInt(kbps_str) <= max_bw * 1024){
			var num = Math.floor(max_bw * 1024 / kbps_str);
			text = text + "\r\n\r\n最大带宽允许相机数量 : {0}".format(num);
		}
	}
	
	$("#rtxt_bw_result").val(text);
}