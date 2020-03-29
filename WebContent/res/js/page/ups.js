
var list_kva = [1, 2, 3, 6, 10, 15, 20, 30, 40, 60, 80, 100];
var list_kva_p = [];
var list_ah = [24, 38, 65, 100];

$(document).ready(function(){
	
	$("#txt_total_power").val("");
	$("#txt_total_hour").val("");
	$("#txt_group_num").val("16");
	$("#txt_power_v").val("12");
	
	EventUtils.addEvent($("#btn_calc")[0], "click", function(){
		fnCalc();
	});
	
	EventUtils.addEvent($("#btn_reset")[0], "click", function(){
		$("#txt_total_power").val("");
		$("#txt_total_hour").val("");
		$("#txt_group_num").val("16");
		$("#txt_power_v").val("12");
		$("#rtxt_ups_result").val("");
	});
})

function fnCalc(){
	var p_str = $("#txt_total_power").val();
	var h_str = $("#txt_total_hour").val();
	if("" == p_str || "" == h_str){
		alert("请输入总功率和后备时间！");
		return;
	}
	
	var g_n_str = $("#txt_group_num").val();
	var p_v_str = $("#txt_power_v").val();
	if("" == g_n_str || "" == p_v_str){
		alert("请输入电池组节数和电池电压值！");
		return;
	}
	
	var p = parseInt(p_str);
	var h;
	try
	{
		h = parseFloat(h_str);
	}catch(e){
		alert("设备后备时间输入错误！");
		return;
	}
	
	var gn = parseInt(g_n_str);
	var pv = parseInt(p_v_str);
	
	var x1 = 0.8;
	var x2 = 1.0;
	var kva = p / x1 / x2 / 1000;
	var kva_get = fnGetKva(kva);
	if(-1 == kva_get){
		alert("未找到匹配的 UPS！");
		return;
	}
	
	var x3 = 0.7;
	var x4 = 0.9;
	var ah = Math.ceil(kva * 1000 * x3 * h / gn / pv / x4);
	var ah_list = fnGetBestAh(ah);
	if(ah_list.length != 2 || ah_list[0] == 0 || ah_list[1] == 0){
		alert("计算出现错误！");
		return;
	}
	
	var text = "计算结果仅供参考\r\n\r\nUPS 容量大小 : {0} KVA\r\n蓄电池安时数 : {1} AH\r\n\r\n电池组电池数 : {2}\r\n电池组组数 : {3}\r\n电池总数目 : {4}".format(
			kva_get,
			ah_list[0],
			gn,
			ah_list[1],
			gn * ah_list[1]);
	
	$("#rtxt_ups_result").val(text);
}

function fnGetKva(kva){
	for(var i = 0; i < list_kva.length; i++){
		if(list_kva[i] >= kva)
			return list_kva[i];
	}
	return -1;
}

function fnGetBestAh(ah){
	var ah_val = 0;
	var group = 0;
	
	var index = 1;
	// 不宜计算过多组
	while(group == 0 && index <= 100){
		for(var i = 0; i < list_ah.length; i++){
			if(list_ah[i] * index >= ah){
				ah_val = list_ah[i];
				group = index;
				break;
			}	
		}
		index++;
	}
	return [ah_val, group];
}
