//投票方法
function toupiao(obj,id){
	var member_id = is_login();
	if(member_id == '-1'){
		api.alert({msg: '请先登录'});
		login_page();
		return false;
	}
	$.post(ApiUrl+'/api/toupiao?id='+id+'&member_id='+member_id+'&callback=?',{},function(data){
		var data = JSON.parse(data);
        if(data.status == 0 || data.status == 2){
            api.alert({msg: data.data});
            $('#vote_num').html(data.item_optnum);
            $(obj).removeAttr('onclick');
            $(obj).children('span').removeClass('aui-icon-roundcheck');
        	$(obj).children('span').addClass('aui-icon-roundcheckfill');
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
	var member_id = is_login();
	if(member_id == '-1'){
		api.alert({msg: '请先登录'});
		login_page();
		return false;
	}
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
	var member_id = is_login();
	if(member_id == '-1'){
		api.alert({msg: '请先登录'});
		login_page();
		return false;
	}
    $.post(ApiUrl+'/api/comm_goodbad?id='+commid+'&status='+status+'&member_id='+member_id+'&callback=?',{},function(data){
    	var data = JSON.parse(data);
        if(data.status == 0){
            api.alert({msg: data.data});
            $(obj).removeAttr('onclick');
        	$(obj).removeClass('aui-icon-appreciate');
        	$(obj).addClass('aui-icon-appreciatefill');
        	$(obj).addClass('aui-text-warning');
        	$(obj).next('span').html(data.num);
        }else{
            api.alert({msg: data.data});
        }
    });
}



$(function() {
    //获取主题选项id
    var itemoptid = getQueryString('itemoptid');
    //获取当前登陆用户的id
    var member_id = is_login();

    //主题选项基本信息
	$.post(ApiUrl+'/api/itemoption?id='+itemoptid+'&member_id='+member_id+'&callback=?',{},function(data){
		var data = JSON.parse(data);
		$('.aui-title').html(data.data.item_opttitle);
		var html = template('itemoptdata', data);
		document.getElementById('itemoptinfo').innerHTML = html;
	});
	
	//主题选项评论列表
	$.post(ApiUrl+'/api/optioncomments?id='+itemoptid+'&member_id='+member_id+'&callback=?',{},function(data){
		var data = JSON.parse(data);
		
		var html = template('itemopt_commdata', data);
		document.getElementById('itemopt_comminfo').innerHTML = html;
	});
})
function collectionInfo(obj){

	var member_id=is_login();
	if(member_id==-1){
		alert('请先登录');
		login_page('shoucang');return false;
	}
	var item_optid=obj;
	$.post(ApiUrl+'/api/collectionInfo?member_id='+member_id+'&item_optid='+item_optid+'&callback=?',{},function(data){
	var data = JSON.parse(data);

	if(data.status=='0' || data.status=='2'){
		api.alert({msg: data.data});
		$('#collectionInfo').removeAttr('onclick');
		$('#class_shoucang').removeClass('aui-icon-like');
		$('#class_shoucang').addClass('aui-icon-likefill');
		$('.shoucang').html("已收藏");
	}else{
		api.alert({msg: data.data});
	}

	});
}