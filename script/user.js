 function setGroupIndex(){
        //获取value值
        var mobile = $('#mobile').val();
        var password = $('#password').val();
        var password2 = $('#password2').val();

        if(password != password2){
        	alert('两次密码不一致密码');
        	return false;
        }


        api.setFrameGroupIndex({
            name: 'register_frm',
            index:1,
            scroll:true
        });
}



