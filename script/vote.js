//投票方法
function toupiao(obj,id){
	$.post(ApiUrl+'/api/toupiao?id='+id+'&callback=?',{},function(data){
		var data = JSON.parse(data);
        if(data.status == 0){
            api.alert({msg: data.data});
            $('#vote_num').html(data.item_optnum);
            $(obj).removeAttr('onclick');
            $(obj).children('a').html("已投票");
        }else{
            api.alert({msg: data.data});
        }
    });
}

//发表评论
function pinglun(){
	var id = getQueryString('itemoptid');
	var comment = $('#ask-text textarea').val();
	var member_id = 1;
	$.post(ApiUrl+'/api/item_comment?id='+id+'&comment='+comment+'&member_id='+member_id+'&callback=?',{},function(data){
		var data = JSON.parse(data);
		if(data.status == 0){
		    api.alert({msg: data.data});
		    $('#ask-text textarea').val(' ');
		    hideReply();
	  	}else{
		    api.alert({msg: data.data});
		}
	});
}

//点赞和点扯ajax
function good_bad(obj,commid,status){
    $.post(ApiUrl+'/api/comm_goodbad?id='+commid+'&status='+status+'&callback=?',{},function(data){
    	var data = JSON.parse(data);
        if(data.status == 0){
            api.alert({msg: data.data});
            $(obj).removeAttr('onclick');
            if(status == 'good'){
            	$(obj).next('span').html("已点赞");
            }else{
            	$(obj).next('span').html("已点扯");
            }
        }else{
            api.alert({msg: data.data});
        }
    });
}
$(function() {
    //获取主题选项id
    var itemoptid = getQueryString('itemoptid');

    //主题选项基本信息
	$.post(ApiUrl+'/api/itemoption?id='+itemoptid+'&callback=?',{},function(data){
		var data = JSON.parse(data);
		$('.aui-title').html(data.data.item_opttitle);
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
function collectionInfo(obj){

	var member_id=1;
	var item_optid=obj;
	$.post(ApiUrl+'/api/collectionInfo?member_id='+member_id+'&item_optid='+item_optid+'&callback=?',{},function(data){
	var data = JSON.parse(data);

	if(data.status=='0'){
		api.alert({msg: data.data});
		$('#collectionInfo').removeAttr('onclick');
		$('.shoucang').html("已收藏");
	}else{
		// api.alert({msg: data.data});
	}
	});
}