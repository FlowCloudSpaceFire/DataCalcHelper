
var ipoption = 0;
var ipnum = 1;

$(document).ready(function(){
	
	$("#txt_ip_num").val(1);
	$("#rtxt_ip_result").val("");
	
	EventUtils.addEvent($("#cmb_ipoption")[0], "change", function(){
		ipoption = parseInt($("#cmb_ipoption").val());
		if(0 == ipoption){
			$($("#div_ip_value")[0]).removeClass("x-dis-block").removeClass("x-dis-none").addClass("x-dis-none");
		}
		else if(1 == ipoption){
			$($("#div_ip_value")[0]).removeClass("x-dis-none").removeClass("x-dis-block").addClass("x-dis-block");
		}
	});
	
	EventUtils.addEvent($("#btn_calc")[0], "click", function(){
		fnCalc();
	});
	
	EventUtils.addEvent($("#btn_reset")[0], "click", function(){
		$("#cmb_ipoption").val(0);
		ipoption = 0;
		
		$($("#div_ip_value")[0]).removeClass("x-dis-block").removeClass("x-dis-none").addClass("x-dis-none");
		
		$("#txt_ip1").val("");
		$("#txt_ip2").val("");
		$("#txt_ip3").val("");
		$("#txt_ip4").val("");
		
		$("#txt_ip_num").val(1);
		$("#rtxt_ip_result").val("");
	});
})

function fnCalc(){
	var tmp_num = $("#txt_ip_num")[0].value;
	if(tmp_num == ""){
		alert("请输入需要获取的 ip 数量！");
		return;
	}
	ipnum = parseInt(tmp_num);
	if(ipnum > 60000){
		alert("获取的 ip 数量不能大于 60000");
		return;
	}
	
	var ip_val = "192.168.0.1";
	var ip1 = 192;
	var ip2 = 168;
	var ip3 = 0;
	var ip4 = 1;
	if(1 == ipoption){
		var tmp_ip1 = $("#txt_ip1")[0].value;
		var tmp_ip2 = $("#txt_ip2")[0].value;
		var tmp_ip3 = $("#txt_ip3")[0].value;
		var tmp_ip4 = $("#txt_ip4")[0].value;
		
		ip1 = tmp_ip1 == "" ? -1 : parseInt(tmp_ip1);
		ip2 = tmp_ip2 == "" ? -1 : parseInt(tmp_ip2);
		ip3 = tmp_ip3 == "" ? -1 : parseInt(tmp_ip3);
		ip4 = tmp_ip4 == "" ? -1 : parseInt(tmp_ip4);
		
		if(ip1 < 0 || ip1 > 255 ||
		   ip2 < 0 || ip2 > 255 || 
		   ip3 < 0 || ip3 > 255 || 
		   ip4 < 0 || ip4 > 255){
			alert("输入的已分配的 ip 地址不正确（0-255）！");
			return;
		}
		
		ip_val = "{0}.{1}.{2}.{3}".format(ip1, ip2, ip3, ip4);
	}
	
	var maskbits = Math.floor(Math.log2(ipnum)); 
	if(maskbits < 0 || maskbits >= 32){
		alert("分配的 IP 数目不正确！");
		return;
	}

	var mask = 0xffffffff - Math.pow(2, maskbits + 1) + 1;
	var mask1 = mask >> 24 & 0xff;
	var mask2 = mask << 8 >> 24 & 0xff;
	var mask3 = mask << 16 >> 24 & 0xff;
	var mask4 = mask << 24 >> 24 & 0xff;
	var ip_mask = '{0}.{1}.{2}.{3}'.format(mask1, mask2, mask3, mask4);
	
	var ip_max_num = (1 << (maskbits + 1)) - 2;
	
	// ip_val 与掩码计算网络号
    var ip_net_index1 = ip1 & mask1;
    var ip_net_index2 = ip2 & mask2;
    var ip_net_index3 = ip3 & mask3;
    var ip_net_index4 = ip4 & mask4;
    
    var ip_net_value = ip_net_index1 * Math.pow(2, 24) + 
    				   ip_net_index2 * Math.pow(2, 16) +
    				   ip_net_index3 * Math.pow(2, 8) +
    				   ip_net_index4;
    
    var ip_net_ip_first_val = ip_net_value + 1;
    var ip_net_ip_last_val = ip_max_num <= 0 ? ip_net_ip_first_val : ip_net_value + ip_max_num;
    var ip_net_ip_broadcast_val = ip_net_value + ip_max_num + 1;
    
    var ip_net_index = '{0}.{1}.{2}.{3}'.format(ip_net_index1, ip_net_index2, ip_net_index3, ip_net_index4);
    
    var ip_net_ip_first = int2ipv4(ip_net_ip_first_val);
    var ip_net_ip_last = int2ipv4(ip_net_ip_last_val);
    var ip_net_broadcast = int2ipv4(ip_net_ip_broadcast_val);
    
    var text = "计算结果仅供参考\r\n\r\n最大可用 IP 个数 : {0}\r\n可分配的 IP 网络号 : {1}\r\n第一个可用 IP 地址 : {2}\r\n最后一个可用 IP 地址 : {3}\r\n网络广播地址 : {4}\r\n子网掩码地址 : {5}".format(
    		ip_max_num,	
    		ip_net_index,
			ip_net_ip_first,
			ip_net_ip_last,
			ip_net_broadcast,
			ip_mask);
    $("#rtxt_ip_result").val(text);
}

function int2ipv4(dec){
	var ip1 = dec >> 24 & 0xff;
	var ip2 = dec << 8 >> 24 & 0xff;
	var ip3 = dec << 16 >> 24 & 0xff;
	var ip4 = dec << 24 >> 24 & 0xff;
	var ip = '{0}.{1}.{2}.{3}'.format(ip1, ip2, ip3, ip4);
	return ip;
}

function ipv42int(ip){
	var ip_arr = ip.split(".");
	if(ip_arr.length != 4) return 0;
	var list = [0, 0, 0, 0];
	for(var i = 0; i < 4; i++){
		list[i] = parseInt(ip_arr[i]);
	}
	var ip_int = list[0] * Math.pow(2, 24) + 
		     list[1] * Math.pow(2, 16) +
		     list[2] * Math.pow(2, 8) +
		     list[3];
	return ip_int;
}

function binstr2ipstr(bin){
	var ip1 = 0;
	var ip2 = 0;
	var ip3 = 0;
	var ip4 = 0;
	if(bin.length == 32){
		ip1 = parseInt(bin.substr(0, 8), 2);
	    ip2 = parseInt(bin.substr(8, 8), 2);
	    ip3 = parseInt(bin.substr(16, 8), 2);
	    ip4 = parseInt(bin.slice(-8), 2);
	    return "{0}.{1}.{2}.{3}".format(ip1, ip2, ip3, ip4);
	}
	return "";
}

function ipstr2binstr(ip){
	var ip_str = "";
	var ip_arr = ip.split(".");
	if(ip_arr.length != 4) return "";
	var bin = null;
	var count = 0;
	for(var i = 0; i < 4; i++){
		bin = parseInt(ip_arr[i]).toString(2);
		count = 8 - bin.length;
		for(var j = 0; j < count; j++){
			bin = "0" + bin;
		}
		ip_str += bin;
	}
	return ip_str;
}
