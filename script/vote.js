$(function() {
    //获取主题选项id
    var itemoptid = getQueryString('itemoptid');

    //主题选项基本信息
	$.post(ApiUrl+'/api/itemoption?id='+itemoptid+'&callback=?',{},function(data){
		var data = JSON.parse(data);
		var html = template('itemoptdata', data);
		document.getElementById('itemoptinfo').innerHTML = html;
	});
	
	//主题选项评论列表
	$.post(ApiUrl+'/api/optioncomments?id='+itemoptid+'&callback=?',{},function(data){
		var data = JSON.parse(data);
		var html = template('itemopt_commdata', data);
		document.getElementById('itemopt_comminfo').innerHTML = html;
	});
})