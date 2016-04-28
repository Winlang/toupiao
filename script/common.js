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
		if(data.status == 1){
			return 1;
		}else{
			return 0;
		}
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

function showToast(){
    $api.css($api.byId("default"),"display:block");
    setTimeout(function(){
        $api.css($api.byId("default"),"display:none");
    },2000)
}

function login_page(){
    api.openWin({
        name: 'login',
        url: 'login.html',
    });
}

// function is_login(){
// 	api.getPrefs({
// 	    key: 'uid'
// 	}, function( ret, err ){
// 	    if( ret ){
// 	    	return ret.value;
// 	    }else{
// 	         return -1;
// 	    }
// 	});
// }

function is_login(){
	var uid = $api.getStorage('uid');
	if(uid > 0){
		//已登录
		return uid;
	}else{
		//未登录
		return -1;
	}
}

function dologout(){
	$api.setStorage('uid','');
	api.sendEvent({
        name : 'logoutEvent',
        extra : {
           name : '登录/注册',
        }
    });
	login_page();
}


