$(function(){
	$.post(ApiUrl+'/api/is_login',{},function(data){
		if(data.status == 1){
			//已登录
		}else{
			//未登录
			login();
		}
	});
	
	//用户中心信息
	// $.post(ApiUrl+'/api/userinfo',{},function(data){
 //        alert(data);
 //        // var data = JSON.parse(data);

 //        // //处理图片
 //        // for (var i = data.list.length - 1; i >= 0; i--) {
 //        //         data.list[i].item_titleimg = set_item_titleimg(data.list[i].item_titleimg);
 //        // }

        
 //        // var html = template('test', data);
 //        // document.getElementById('aui-content').innerHTML = html;
 //    });



	$('#sendVerify').click(function(){
		var mobile = $('#mobile').val();

		//验证是否是争取的手机号码
		if(!mobile.match(/^1[3|4|5|8][0-9]\d{4,8}$/)){
		    alert("手机号码格式不正确，请重新输入"); 
		    return false;
		}

		if(mobile == "" || mobile == null){
			alert('手机号不能为空');
			return false;
		}
		

		//发送短信 并显示 倒计时
		var sms_status = sendMsg(mobile);
		if(sms_status == 0){
			alert('发送失败');
			return false;
		}

		//倒计时
		$(this).html(60);

		//不能被点击
		$(this).attr("disabled", "disabled");

		StepTimes();

	});
});

//倒计时函数
function StepTimes() {
	$num = parseInt($('#sendVerify').html());
	$num = $num - 1;
	$('#sendVerify').html($num);
	if ($num <= 0) {
		$('#sendVerify').html("点击再次发送");
		$("#sendVerify").removeAttr("disabled");
	} else {
		setTimeout(StepTimes,1000);
	}
}

//提交下一步   注册功能
function setGroupIndex(){
        //获取value值
        var mobile = $('#mobile').val();
        var code = $('#code').val();
        var password = $('#password').val();
        var password2 = $('#password2').val();

        if(password != password2){
        	alert('两次密码不一致密码');
        	return false;
        }

        //提交数据
        $.post(ApiUrl+'/api/register_one',{'mobile':mobile,'code':code,'password':password,'password2':password2},function(data){
        	//注册成功 进入个人中心
        	if(data.status == 1){

	        	api.openWin({
			        name: 'percenter',
			        url: 'percenter_win.html',
			        bounces: true,
			        rect: {
			            x: 0,
			            y: 0,
			            w: 'auto',
			            h: 'auto'
			        }
	    		});
	        }else{
	        	alert('注册失败,请重新注册~');
	        }
        },'json');
}

//登陆
function login(){
        //获取value值
        var mobile = $('#mobile').val();
        var password = $('#password').val();
        if(mobile == '' || mobile == null){
        	alert('手机号不能为空');
        	return false;
        }
        if(password == '' || password == null){
        	alert('密码不能为空');
        	return false;
        }
        //提交数据
        $.post(ApiUrl+'/api/login',{'mobile':mobile,'passwd':password},function(data){
        	//登陆成功 进入个人中心
        	if(data.status == 1){

	        	api.openWin({
			        name: 'percenter',
			        url: 'percenter_win.html',
			        bounces: true,
			        rect: {
			            x: 0,
			            y: 0,
			            w: 'auto',
			            h: 'auto'
			        }
	    		});
	        }else{
	        	alert('登陆失败,请重新登陆~');
	        }
        },'json');
}

