
var calc_con_option = 0;
var calc_br_type_option = 0;
var calc_re_type_option = 0;

var calc_re_1_encode_option = 0;
var calc_re_1_resolution_option = 0;
var calc_re_2_encode_option = 0;
var calc_re_2_resolution_option = 0;

var enc_br_h264_list = [1.5, 3, 3.5, 5, 7, 8, 10, 10.7, 12, 16];
var enc_br_h265_list = [0.9, 1.8, 2.1, 3, 4.2, 4.8, 6, 6.4, 7.2, 9.6];

$(document).ready(function(){
	
	fnResetCondition(true);
	fnResetCalcBitRate(true);
	fnResetCalcResolution(true);
	fnResetResult();
	
	EventUtils.addEvent($("#cmb_calc_con_option")[0], "change", function(){
		calc_con_option = $("#cmb_calc_con_option").val();
		if(calc_con_option == 0){
			$("#div_calc_bitrate").removeClass("x-dis-none").removeClass("x-dis-block").addClass("x-dis-block");
			$("#div_calc_resolution").removeClass("x-dis-block").removeClass("x-dis-none").addClass("x-dis-none");
		}else{
			$("#div_calc_bitrate").removeClass("x-dis-block").removeClass("x-dis-none").addClass("x-dis-none");
			$("#div_calc_resolution").removeClass("x-dis-none").removeClass("x-dis-block").addClass("x-dis-block");
		}
	});
	
	EventUtils.addEvent($("#cmb_br_calc_dir_option")[0], "change", function(){
		calc_br_type_option = $("#cmb_br_calc_dir_option").val();
		if(calc_br_type_option == 0){
			$("#div_br_1").removeClass("x-dis-none").removeClass("x-dis-block").addClass("x-dis-block");
			$("#div_br_2").removeClass("x-dis-block").removeClass("x-dis-none").addClass("x-dis-none");
			$("#div_br_3").removeClass("x-dis-block").removeClass("x-dis-none").addClass("x-dis-none");
		}else if(calc_br_type_option == 1){
			$("#div_br_2").removeClass("x-dis-none").removeClass("x-dis-block").addClass("x-dis-block");
			$("#div_br_1").removeClass("x-dis-block").removeClass("x-dis-none").addClass("x-dis-none");
			$("#div_br_3").removeClass("x-dis-block").removeClass("x-dis-none").addClass("x-dis-none");
		}else{
			$("#div_br_3").removeClass("x-dis-none").removeClass("x-dis-block").addClass("x-dis-block");
			$("#div_br_1").removeClass("x-dis-block").removeClass("x-dis-none").addClass("x-dis-none");
			$("#div_br_2").removeClass("x-dis-block").removeClass("x-dis-none").addClass("x-dis-none");
		}
	});
	
	EventUtils.addEvent($("#cmb_re_calc_type_option")[0], "change", function(){
		calc_re_type_option = $("#cmb_re_calc_type_option").val();
		if(calc_re_type_option == 0){
			$("#div_re_1").removeClass("x-dis-none").removeClass("x-dis-block").addClass("x-dis-block");
			$("#div_re_2").removeClass("x-dis-block").removeClass("x-dis-none").addClass("x-dis-none");
		}else{
			$("#div_re_2").removeClass("x-dis-none").removeClass("x-dis-block").addClass("x-dis-block");
			$("#div_re_1").removeClass("x-dis-block").removeClass("x-dis-none").addClass("x-dis-none");
		}
	});
	
	EventUtils.addEvent($("#cmb_re_1_calc_encode_option")[0], "change", function(){
		calc_re_1_encode_option = $("#cmb_re_1_calc_encode_option").val();
		
		if(calc_re_1_encode_option == 0){
			$("#txt_re_1_res_br").val(enc_br_h264_list[calc_re_1_resolution_option]);
		}else if(calc_re_1_encode_option == 1){
			$("#txt_re_1_res_br").val(enc_br_h265_list[calc_re_1_resolution_option]);
		}
	});
	
	EventUtils.addEvent($("#cmb_re_1_calc_resolution_option")[0], "change", function(){
		calc_re_1_resolution_option = $("#cmb_re_1_calc_resolution_option").val();
		
		if(calc_re_1_encode_option == 0){
			$("#txt_re_1_res_br").val(enc_br_h264_list[calc_re_1_resolution_option]);
		}else if(calc_re_1_encode_option == 1){
			$("#txt_re_1_res_br").val(enc_br_h265_list[calc_re_1_resolution_option]);
		}
	});
	
	EventUtils.addEvent($("#cmb_re_2_calc_encode_option")[0], "change", function(){
		calc_re_2_encode_option = $("#cmb_re_2_calc_encode_option").val();
		
		if(calc_re_2_encode_option == 0){
			$("#txt_re_2_res_br").val(enc_br_h264_list[calc_re_2_resolution_option]);
		}else if(calc_re_2_encode_option == 1){
			$("#txt_re_2_res_br").val(enc_br_h265_list[calc_re_2_resolution_option]);
		}
	});
	
	EventUtils.addEvent($("#cmb_re_2_calc_resolution_option")[0], "change", function(){
		calc_re_2_resolution_option = $("#cmb_re_2_calc_resolution_option").val();
		
		if(calc_re_2_encode_option == 0){
			$("#txt_re_2_res_br").val(enc_br_h264_list[calc_re_2_resolution_option]);
		}else if(calc_re_2_encode_option == 1){
			$("#txt_re_2_res_br").val(enc_br_h265_list[calc_re_2_resolution_option]);
		}
	});
	
	EventUtils.addEvent($("#btn_calc")[0], "click", function(){
		fnCalc();
	});
	
	EventUtils.addEvent($("#btn_reset")[0], "click", function(){	
		fnResetCondition(false);
		fnResetCalcBitRate(false);
		fnResetCalcResolution(false);
		fnResetResult();		
	});
})

function fnCalc(){
	// 按码率计算
	if(calc_con_option == 0){
		// 1) 计算方向为计算录像大小
		if(calc_br_type_option == 0){
			var br_m_str = $("#txt_br_1_br_m").val();
			var br_k_str = $("#txt_br_1_br_k").val();
			var cam_num_str = $("#txt_br_1_cam_num").val();
			var store_hour_str = $("#txt_br_1_store_time").val();
			if("" == br_m_str && "" == br_k_str){
				alert("请输入码率大小！");
				return;
			}
			if("" == cam_num_str || "" == store_hour_str){
				alert("请输入摄像头数量和存储时间！");
				return;
			}
			
			var br_m = "" == br_m_str ? 0 : parseInt(br_m_str);
			var br_k = "" == br_k_str ? 0 : parseInt(br_k_str);
			var cam_num = parseInt(cam_num_str);
			var store_hour = parseInt(store_hour_str);
			var result = (br_m * 1024 + br_k) / 8 * cam_num * store_hour * 60 * 60 / 1024;
			
			var text = "计算结果仅供参考\r\n\r\n";
			if(result < 1024){
				text = text + "计算录像大小 : {0} MB".format(result.toFixed(2));
			}else if(result < 1024 * 1024){
				text = text + "计算录像大小 : {0} GB".format((result/1024).toFixed(2));
			}else{
				text = text + "计算录像大小 : {0} TB".format((result/1024/1024).toFixed(2));
			}
			$("#rtxt_record_result").val(text);
		}
		// 2) 计算方向为计算录像时间
		else if(calc_br_type_option == 1){
			var br_m_str = $("#txt_br_2_br_m").val();
			var br_k_str = $("#txt_br_2_br_k").val();
			var disk_size_str = $("#txt_br_2_disk_size").val();
			var cam_num_str = $("#txt_br_2_cam_num").val();
			if("" == br_m_str && "" == br_k_str){
				alert("请输入码率大小！");
				return;
			}
			if("" == cam_num_str || "" == disk_size_str){
				alert("请输入硬盘总容量和存储时间！");
				return;
			}
			
			// 硬盘利用系数 0-1
			var x = 0.838;			
			
			var br_m = "" == br_m_str ? 0 : parseInt(br_m_str);
			var br_k = "" == br_k_str ? 0 : parseInt(br_k_str);
			var cam_num = parseInt(cam_num_str);
			var disk_size = parseInt(disk_size_str);
			var result = Math.floor(x * disk_size * 1024 * 1024 * 8 / (br_m * 1024 + br_k) / cam_num);
			
			var day = Math.floor(result / 3600 / 24);
			var hour = Math.floor((result - day * 24 * 3600) / 3600);
			var min = Math.floor((result - day * 24 * 3600 - hour * 3600) / 60);
			var sec = result - day * 24 * 3600 - hour * 3600 - min * 60;
			
			var text = "计算结果仅供参考\r\n\r\n";
			
			text = text + "计算录像时间 : {0} 天 {1} 小时 {2} 分钟 {3} 秒".format(
					day, hour, min, sec);
			$("#rtxt_record_result").val(text);
		}		
		// 3) 计算方向为计算码率大小
		else if(calc_br_type_option == 2){
			var disk_size_str = $("#txt_br_3_disk_size").val();
			var cam_num_str = $("#txt_br_3_cam_num").val();
			var store_hour_str = $("#txt_br_3_store_time").val();
			if("" == disk_size_str || "" == cam_num_str || "" == store_hour_str){
				alert("请输入硬盘总容量，摄像头数量和存储时间！");
				return;
			}
			
			var x = 900 / 1024;	

			var disk_size = parseInt(disk_size_str);
			var cam_num = parseInt(cam_num_str);
			var store_hour = parseInt(store_hour_str);
			var result = x * disk_size * 1024 * 8 / (store_hour * 3600) / cam_num;
			
			var text = "计算结果仅供参考\r\n\r\n";
			
			text = text + "计算码流大小 : {0} Mb/s".format(result.toFixed(2));
			$("#rtxt_record_result").val(text);
		}
	}
	// 按分辨率计算
	else{
		// 1) 计算方向为计算录像大小
		if(calc_re_type_option == 0){
			var enc_type = $("#cmb_re_1_calc_encode_option").val();
			var res_type = $("#cmb_re_1_calc_resolution_option").val();
			var cam_num_str = $("#txt_re_1_cam_num").val();
			var store_hour_str = $("#txt_re_1_store_time").val();
			
			if("" == cam_num_str || "" == store_hour_str){
				alert("输入摄像头数量和存储时间！");
				return;
			}
			
			var br_str = $("#txt_re_1_res_br").val();
			if("" == br_str){
				alert("输入分辨率码流！");
				return;
			}
			
			var cam_num = parseInt(cam_num_str);
			var store_hour = parseInt(store_hour_str);
			var br = 0;
			try{
				br = parseFloat(br_str);
			}catch(e){
				alert("分辨率码流输入错误！");
				return;
			}
			var result = br / 8 * cam_num * store_hour * 3600;
			
			var text = "计算结果仅供参考\r\n\r\n";
			text = text + "所需的录像存储容量 : {0} GB".format((result/1024).toFixed(2));
			$("#rtxt_record_result").val(text);
		}
		// 2) 计算方向为计算录像时间
		else if(calc_re_type_option == 1){
			var enc_type = $("#cmb_re_2_calc_encode_option").val();
			var res_type = $("#cmb_re_2_calc_resolution_option").val();
			var disk_size_str = $("#txt_re_2_disk_size").val();
			var cam_num_str = $("#txt_re_2_cam_num").val();
			if("" == disk_size_str || "" == cam_num_str){
				alert("输入硬盘总容量和摄像头数量！");
				return;
			}
			
			var br_str = $("#txt_re_2_res_br").val();
			if("" == br_str){
				alert("输入分辨率码流！");
				return;
			}
			
			var x = 0.838;
			var disk_size = parseInt(disk_size_str);
			var cam_num = parseInt(cam_num_str);
			
			var br = 0;
			try{
				br = parseFloat(br_str);
			}catch(e){
				alert("分辨率码流输入错误！");
				return;
			}
			
			var result = Math.floor(x * disk_size * 1024 * 8 / cam_num / br);	
			var day = Math.floor(result / 3600 / 24);
			var hour = Math.floor((result - day * 24 * 3600) / 3600);
			var min = Math.floor((result - day * 24 * 3600 - hour * 3600) / 60);
			var sec = result - day * 24 * 3600 - hour * 3600 - min * 60;
			
			var text = "计算结果仅供参考\r\n\r\n";
			
			text = text + "计算录像时间 : {0} 天 {1} 小时 {2} 分钟 {3} 秒".format(
					day, hour, min, sec);
			$("#rtxt_record_result").val(text);
		}
	}
}

function fnResetCondition(setcmb){
	if(setcmb){
		$("#cmb_calc_con_option").val(0);
		calc_con_option = 0;
	}
}

function fnResetResult(){
	$("#rtxt_record_result").val("");
}

function fnResetCalcBitRate(setcmb){
	if(setcmb){
		$("#cmb_br_calc_dir_option").val(0);
		calc_br_type_option = 0;
	}
	$("#txt_br_1_br_m").val("");
	$("#txt_br_1_br_k").val("");	
	$("#txt_br_1_cam_num").val("");
	$("#txt_br_1_store_time").val("");
	
	$("#txt_br_2_br_m").val("");
	$("#txt_br_2_br_k").val("");
	$("#txt_br_2_disk_size").val("");
	$("#txt_br_2_cam_num").val("");
	
	$("#txt_br_3_disk_size").val("");
	$("#txt_br_3_cam_num").val("");
	$("#txt_br_3_store_time").val("");
}

function fnResetCalcResolution(setcmb){
	if(setcmb){
		$("#cmb_re_calc_type_option").val(0);
	  	calc_re_type_option = 0;
	}
	
	if(setcmb){
		$("#cmb_re_1_calc_encode_option").val(0);
		calc_re_1_encode_option = 0;
	}
	
	if(setcmb){
		$("#cmb_re_1_calc_resolution_option").val(1);
		calc_re_1_resolution_option = 1;
		
		if(calc_re_1_encode_option == 0){
			$("#txt_re_1_res_br").val(enc_br_h264_list[calc_re_1_resolution_option]);
		}else if(calc_re_1_encode_option == 1){
			$("#txt_re_1_res_br").val(enc_br_h265_list[calc_re_1_resolution_option]);
		}		
	}
	$("#txt_re_1_cam_num").val("");
	$("#txt_re_1_store_time").val("");
	
	if(setcmb){
		$("#cmb_re_2_calc_encode_option").val(0);
		calc_re_2_encode_option = 0;	
	}
	
	if(setcmb){
		$("#cmb_re_2_calc_resolution_option").val(1);
		calc_re_2_resolution_option = 1;	
		
		if(calc_re_2_encode_option == 0){
			$("#txt_re_2_res_br").val(enc_br_h264_list[calc_re_2_resolution_option]);
		}else if(calc_re_2_encode_option == 1){
			$("#txt_re_2_res_br").val(enc_br_h265_list[calc_re_2_resolution_option]);
		}
	}
	
	$("#txt_re_2_disk_size").val("");
	$("#txt_re_2_cam_num").val("");
}
