layui.use(['element'], function(){
	$ = layui.jquery;
  	element = layui.element(); 
  

  	//监听导航点击
  	element.on('nav(side)', function(elem){
    	url = elem.find('a').attr('_href');
		
			//alert("总共"+$('.x-iframe').length);
			//alert(i+"结束");
			

			$('.layui-tab-item').find('iframe').remove();
		
		
    	res = element.tabAdd('x-tab', {
			content: '<iframe frameborder="0" src="'+url+'" class="x-iframe"></iframe>'  //,
			//id:
		    });

		

		//element.tabChange('x-tab', $('.x-iframe').length-1);

    	});
});

/*
思路：
先使用remove()去除说有的选项卡，
使用tadadd添加

*/