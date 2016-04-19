$(function() {
        //获取主题id
        var item_id = getQueryString('item_id');
        //alert(item_id);

        //主题基本信息
	$.post(ApiUrl+'/api/iteminfo?id='+item_id+'&callback=?',{},function(data){
                var data = JSON.parse(data);
                //alert(data.data.id);
                var html = template('item', data);
                document.getElementById('iteminfo').innerHTML = html;
	});

        //主题对应选项列表
        $.post(ApiUrl+'/api/itemoptions?id='+item_id+'&callback=?',{},function(res){
                //alert(res);
                var data = JSON.parse(res);
                //alert(typeof(data));
                var html = template('itemoptions', data);
                document.getElementById('itemoption_list').innerHTML = html;
        });
})