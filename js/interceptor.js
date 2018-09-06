// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    console.log("拦截："+JSON.stringify(response.data.code))
    if(response.data.code == 401){
    	console.log('未登录')
//  	window.location.href = 'login.html'
    	$.ajax({
    		type:"get",
    		url:baseUrl + '/api/wechat/get/app/info',
    		async:true,
    		success:function(data){
    			if(data.code == 200){
//  				alert('appid:' + data.data.appId);
    				window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + data.data.appId + "&redirect_uri=http%3A%2F%2Fwww.pamirinfo.com%2FtkPark%2Fhtml%2Flogin.html&response_type=code&scope=snsapi_userinfo&state=0#wechat_redirect"
    			}else{
    				window.location.href = 'login.html'
    			}
    		},
    		error:function(err){
    			window.location.href = 'login.html'
    		}
    	});

    	
    }else if (response.data.code == 200) {
    	console.log('已登录')
    	return response;
    }else{
    	return false;
    }
    
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);            
  });