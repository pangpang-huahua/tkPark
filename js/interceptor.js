// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    console.log(response)
    if(response.data.code == 401){
    	console.log('跳转')
    	window.location.href = 'login.html'
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