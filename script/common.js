
/*
 * js获取url参数
 */
function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]); return null;
}

/**
 * 回到应用的首页
 */
function backtoindex(){
    api.closeToWin({
        name: 'root'
    });
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

function login_page(callback){
  api.openWin({
        name:'login',
        url:'login.html?type='+callback,
        delay:300,
        animation:{
            type:'fade'
        }
    })
}

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
// function is_login(){
// 	$.post(ApiUrl+'/api/is_login',{},function(data){
// 		if(data.status == 1){
// 			return 1;
// 		}else{
// 			return 2;
// 		}
// 	});
// }

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

function getNowTime(){
	return (new Date()).valueOf();
}

//打开系统相册
function getPicture(){
    api.getPicture({
        sourceType: 'library',
        encodingType: 'jpg',
        mediaValue: 'pic',
        destinationType: 'url',
        allowEdit: true,
        quality: 100,
        targetWidth:200,
        targetHeight:200,
        saveToPhotoAlbum: false
    }, function(ret, err){
        if(ret.data){
            //打开功能弹层
             api.openWin({
                name: 'avatarclip_frm',
                url: 'avatarclip_frm.html?picUrl='+ret.data,
                bounces: true,
            });
        }else{
            api.alert({msg:err.msg});
        }
    })
}

 

