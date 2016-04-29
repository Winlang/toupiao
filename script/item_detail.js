$(function() {
        //获取主题id
        var item_id = getQueryString('item_id');
        //alert(item_id);

        //主题基本信息
	$.post(ApiUrl+'/api/iteminfo?id='+item_id+'&callback=?',{},function(data){

                var data = JSON.parse(data);

                //设置图片
                data.data.item_titleimg = set_item_titleimg(data.data.item_titleimg);

                var html = template('item', data);
                document.getElementById('iteminfo').innerHTML = html;
	});

        //主题对应选项列表
        $.post(ApiUrl+'/api/itemoptions?id='+item_id+'&callback=?',{},function(res){
                
                var data = JSON.parse(res);
                
                //处理图片
                for (var i = data.data.length - 1; i >= 0; i--) {
                        data.data[i].item_optimg = set_item_optimg(data.data[i].item_optimg);
                }

                //alert(typeof(data));
                var html = template('itemoptions', data);
                document.getElementById('itemoption_list').innerHTML = html;
        });
})