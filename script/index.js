$(function() {
	$.post(ApiUrl+'/api/index/?callback=?',{},function(data){
        // var data_list = {
        //     title: '标签',
        //     list: ['文艺', '博客', '摄影', '电影', '民谣', '旅行', '吉他']
        // };
        var data = JSON.parse(data);
        //alert(typeof(data));
        var html = template('test', data);
        document.getElementById('aui-content').innerHTML = html;
	});
})


