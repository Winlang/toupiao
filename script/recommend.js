$(function() {
    
    


    $.post(ApiUrl+'/api/recommend_item/?callback=?',{},function(data){
      alert(data);return false;
                var data = JSON.parse(data);
                var html = template('itemoptdata', data);

                document.getElementById('aui-content').innerHTML = html;
        });
})
