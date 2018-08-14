
function getUserInfoFun () {
			//1 判断appId是否存在  
			if(sessionStorage.getItem('appId') == null){//不存在时
				alert('appid不存在')
				getAppId()
			}else{//存在时直接重定向
				getCode()
			}
			
			//2 获取appId
			function getAppId () {
				alert('get appid')
				$.ajax({
					type:"get",
					url:baseUrl + "/api/wechat/get/app/info",
					async:true,
					success:function(data){
						if(data.code == 200){
							alert('获取appid 成功')
							sessionStorage.setItem('appId',data.data.appId);
							getCode();
						}else{
							console.log(data.msg);
						}
					},
					error:function(err){
						console.log(err.msg)
					}
				});
			}

			//1    进入网页首先判断是否有code
			function getCode(){
				alert('获取code')
				alert(getParam("code"))
				if(getParam("code")==null){//  1.2   不存在code时   重定向网页链接，并且获取用户信息
					alert('code不存在')
					window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + sessionStorage.getItem('appId') + "&redirect_uri=http%3a%2f%2frvphpv.natappfree.cc/html/login.html&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect" ;
					getUserInfo();
				}else{//  1.2   存在code时   直接获取用户信息
					alert('code 存在')
					getUserInfo();
				}
			}
			
			//获取用户信息 
			function getUserInfo(){
				alert('获取用户信息')
				dataP = {
					code:getParam("code")
				}
				//成功获取到用户信息之后将其保存在session中
				var userInfo = getAjaxData ('post',dataP,'/api/user/info/get/or/add');
				console.log(userInfo)
				if(userInfo.code == 200){   
					alert('获取用户信息成功')
					alert(userInfo.data)
				}
			}
}
