
var type_option = 0;
var jt_option = 0;
var obj_option = 0;

var list_jt_w = [3.6, 4.8, 6.4, 8.8, 20.32];
var list_jt_h = [2.7, 3.6, 4.8, 6.6, 15.24];

$(document).ready(function(){
	
	EventUtils.addEvent($("#cmb_type_option")[0], "change", function(){
		type_option = $("#cmb_type_option").val();
		
		if(type_option == 0){
			$("#lbl_dis").html("物体与镜头距离&emsp;: ");
			$("#lbl_dis_unit").text("(米)");
		}else if(type_option == 1){
			$("#lbl_dis").html("相机的镜头焦距&emsp;: ");
			$("#lbl_dis_unit").text("(毫米)");
		}
	});
	
	EventUtils.addEvent($("#cmb_jt_option")[0], "change", function(){
		jt_option = $("#cmb_jt_option").val();
	});
	
	EventUtils.addEvent($("#cmb_obj_option")[0], "change", function(){
		obj_option = $("#cmb_obj_option").val();
	});	
	
	EventUtils.addEvent($("#btn_calc")[0], "click", function(){
		fnCalc();
	});
	
	EventUtils.addEvent($("#btn_reset")[0], "click", function(){
		$("#cmb_type_option").val(0);
		type_option = 0;
		
		$("#cmb_jt_option").val(0);
		jt_option = 0;
		
		$("#cmb_obj_option").val(0);
		obj_option = 0;
		
		$("#txt_dis").val("");
		$("#txt_obj_param").val("");
	});
})

function fnCalc(){
	var dis_str = $("#txt_dis").val();
	var obj_param_str = $("#txt_obj_param").val();	
	if("" == dis_str || "" == obj_param_str){
		alert("请填写完整信息！");
		return;
	}
	
	var dis = 0.0;
	var obj_param = 0.0;
	try{
		dis = parseFloat(dis_str);
	}catch(e){
		if(type_option == 0){
			alert("物体与镜头距离不正确！");
			return;
		}else{
			alert("相机的镜头焦距不正确！");
			return;
		}
	}
	
	try{
		obj_param = parseFloat(obj_param_str);
	}catch(e){
		alert("被摄物体参数不正确！");
		return;
	}
	
	var value = 0.0;
	if(obj_option == 0){
		value = list_jt_w[jt_option];
	}else{
		value = list_jt_h[jt_option];
	}
	
	var text = "计算结果仅供参考\r\n\r\n";
	
	var result = 0.0;
	if(type_option == 0){
		result = value * dis / obj_param;
		text = text + "镜头焦距 : {0} 毫米".format(result.toFixed(1));
	}else{
		result = dis / value * obj_param;
		text = text + "物体距离 : {0} 米".format(result.toFixed(1));
	}
	
	$("#rtxt_focus_result").val(text);
}