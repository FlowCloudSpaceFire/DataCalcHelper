
/* 0 - [4:3]; 1 - [16:9] */
var scoption = 0;

$(document).ready(function(){
	
	$("#cmb_sc_option").val(0);
	$("#txt_sc_size").val(42);
	
	EventUtils.addEvent($("#cmb_sc_option")[0], "change", function(){
		scoption = parseInt($("#cmb_sc_option").val());
	});
	
	EventUtils.addEvent($("#btn_calc")[0], "click", function(){
		fnCalc();
	});
	
	EventUtils.addEvent($("#btn_reset")[0], "click", function(){
		$("#cmb_sc_option").val(0);
		scoption = 0;
		$("#txt_sc_size").val(42);
		$("#txt_scwall_width").val("");
		$("#txt_scwall_height").val("");
		$("#rtxt_sc_result").val("");
	});
})

function fnCalc(){
	var sc_size_str = $("#txt_sc_size").val();
	if("" == sc_size_str){
		alert("请输入拼接屏尺寸！");
		return;
	}
	var sc_size = parseInt(sc_size_str);
	
	var sc_wall_width_str = $("#txt_scwall_width").val();
	var sc_wall_height_str = $("#txt_scwall_height").val();
	if("" == sc_wall_width_str || "" == sc_wall_height_str){
		alert("请输入屏幕墙宽度和高度！");
		return;
	}
	
	var sc_wall_width = parseFloat(sc_wall_width_str);
	var sc_wall_height = parseFloat(sc_wall_height_str);
	var sc_wall_area_size = sc_wall_width * sc_wall_height;
	
	var x2;
	var sc_width = 0;
	var sc_height = 0;
	
	// 1 英寸 = 2.54 cm
	if(0 == scoption){
		x2 = Math.pow(sc_size, 2) / 25;
		sc_width = Math.sqrt(x2) * 4 / 100 * 2.54;
		sc_height = Math.sqrt(x2) * 3 / 100 * 2.54;
	}else if(1 == scoption){
		x2 = Math.pow(sc_size, 2) / 277;
		sc_width = Math.sqrt(x2) * 16 / 100 * 2.54;
		sc_height = Math.sqrt(x2) * 9 / 100 * 2.54;
	}else{
		return;
	}
	
	var sc_area_size = sc_width * sc_height;
	
	var width_num = sc_wall_width / sc_width;
	var height_num = sc_wall_height / sc_height;
	
	var min_num = Math.floor(width_num) * Math.floor(height_num);
	var max_num = Math.ceil(width_num) * Math.ceil(height_num);
	
	var text = "计算结果仅供参考\r\n\r\n单块拼接屏尺寸 : {0} 英寸\r\n单块拼接屏长度 : {1} 米\r\n单块拼接屏高度 : {2} 米\r\n单块拼接屏面积 : {3} 平方米".format(
			sc_size, sc_width.toFixed(3), sc_height.toFixed(3), sc_area_size.toFixed(3));
	
	text = text + "\r\n\r\n" + "屏幕墙总面积 : {0} 平方米".format(sc_wall_area_size.toFixed(3));
	
	text = text + "\r\n\r\n" + "最小所需拼接屏数量: {0} * {1}\r\n最小所需拼接屏的总面积 : {2} 平方米".format(
			Math.floor(width_num), 
			Math.floor(height_num),
			(min_num * sc_area_size).toFixed(3));
	
	text = text + "\r\n" + "最大所需拼接屏数量: {0} * {1}\r\n最大所需拼接屏的总面积 : {2} 平方米".format(
			Math.ceil(width_num), 
			Math.ceil(height_num),
			(max_num * sc_area_size).toFixed(3));
	
	$("#rtxt_sc_result").val(text);
}