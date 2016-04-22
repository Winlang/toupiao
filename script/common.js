/*
 * js获取url参数
 */
function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]); return null;
}

//发送短信操作
function sendMsg(mobile){
	$.post(ApiUrl+'/api/sendMsg/?callback=?',{'mobile':mobile},function(data){
		alert(data);
	});
}

//主题图片
function set_item_titleimg(item_titleimg){
	return UploadUrl+'/admin/'+item_titleimg;
}


//主题选项图片
function set_item_optimg(item_optimg){
	return UploadUrl+'/admin/'+item_optimg;
}