$(function(){
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
		$(this).html(5);

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

//提交下一步
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
        $.post(ApiUrl+'/api/register_one/?callback=?',{'mobile':mobile,'code':code,'password':password,'password2':password2},function(data){
        	alert(data);
        });

        api.setFrameGroupIndex({
            name: 'percenter_frm',
            index:1,
            scroll:true
        });
}