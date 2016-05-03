$(function() {

        //获取缓存数据
        var storage_data = $api.getStorage('storage_data');
        
        if(storage_data != '' ){
               var data = JSON.parse(storage_data); 
               //处理图片
                for (var i = data.list.length - 1; i >= 0; i--) {
                        data.list[i].item_titleimg = set_item_titleimg(data.list[i].item_titleimg);
                }

                
                var html = template('test', data);
                document.getElementById('aui-content').innerHTML = html;
        }else{
        	//alert('hello'+$api.getStorage('is_login'));
                $.post(ApiUrl+'/api/index/?callback=?',{},function(data){
                        $api.setStorage('storage_data',data);
                        var data = JSON.parse(data);
                        //缓存数据开始
                        // var db = api.require('db');
                        // db.openDatabase({
                        //     name: 'test'
                        // }, function(ret, err){
                        //     if(ret.status){
                        //         //操作数据缓存
                        //         var sql = 'CREATE TABLE Persons(Id_P int, LastName varchar(255), FirstName varchar(255), Address varchar(255), City varchar(255))';
                        //         db.executeSql({
                        //             name: 'test',
                        //             sql: sql
                        //         }, function(ret, err){
                        //             if(ret.status){
                        //                 api.alert({msg:'执行SQL成功'});
                        //             }else{
                        //                 api.alert({msg:err.msg});
                        //             }
                        //         });
                        //     }else{
                        //         api.alert({msg:err.msg});
                        //     }
                        // });
                        //缓存数据结束


                        //处理图片
                        for (var i = data.list.length - 1; i >= 0; i--) {
                                data.list[i].item_titleimg = set_item_titleimg(data.list[i].item_titleimg);
                        }

                        
                        var html = template('test', data);
                        document.getElementById('aui-content').innerHTML = html;
                });
        }
})


