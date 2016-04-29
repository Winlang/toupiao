$(function() {
		//alert('hello'+$api.getStorage('is_login'));
        $.post(ApiUrl+'/api/index/?callback=?',{},function(data){
                var data = JSON.parse(data);

                //处理图片
                for (var i = data.list.length - 1; i >= 0; i--) {
                        data.list[i].item_titleimg = set_item_titleimg(data.list[i].item_titleimg);
                }

                
                var html = template('test', data);
                document.getElementById('aui-content').innerHTML = html;
        });
})


