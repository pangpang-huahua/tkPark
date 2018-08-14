

	//ajax 数据请求
	// var baseUrl = "http://192.168.0.157:8080";
//	var baseUrl = "http://www.cdxskj.com.cn:8080/MyDigitallife";
	var baseUrl = "http://pp8qwy.natappfree.cc";
	//正式
//	var appId = "wx16b0cc8be088487c" ;
	//测试
	// var appId = "wx16b0cc8be088487c" ;
	var dataArr,appId ;
	var appid,timestamp,nonceStr,signature;
	var configinfoObj = {};
	
	
	var userId = '297e0bc464f875300164f87c83bd0000'
	
	//验证手机号码，身份证
	var regTel = /^1[3|4|5|6|7|8|9][0-9]\d{4,8}$/; //电话号码的正则验证
	var resg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
	function getAjaxData (dataType,dataPara,dataUrl) {
		$.ajax({
			type:dataType,
			data:dataPara,
			async:false,//true：异步处理     false:同步处理
			traditional:true,//传递数组时必须加上    使其以传统的方式进行序列化
	//		processData: false,
	//		contentType: false,
			xhrFields: {
				withCredentials: true//解决跨域
			},
			url:baseUrl + dataUrl,
			success:function(data){
				dataArr = data ; 
			},
			error:function(err){
				console.log(err)
			}
		});
		return dataArr ; 
	}
	
	
	//获取url参数
	function GetQueryString(name) {
	   	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
	   	var r = window.location.search.substr(1).match(reg);
	   	if (r!=null) return unescape(r[2]); return null;
	}
	
	//提示按钮
	function promptBtnFun(x) {
		$("#prompt").text(x)
		$("#prompt").fadeIn();
	
		setTimeout(function() {
			$("#prompt").fadeOut()
		}, 1500)
	}
	
	//设置session的函数
	function setcodeval (name,val) {
		if(sessionStorage.getItem(name)==null){
			sessionStorage.setItem(name,val);
		}
	}
	
	
	//通过code获取用户信息
	function getCode () {
		dataP = {
			code:paraFun("code")
		}
		var codeUserInfo = getAjaxData("get",dataP,"/api/weixin/user/web/get/info")
		if(codeUserInfo.code==200){
			//调用openid获取用户信息的方法
			getuserInfo(codeUserInfo.data.weiXinUser.openid);
		}else{
			promptBtn(codeUserInfo.msg)
		}

	}
	
	//通过openid获取用户信息
	function getuserInfo (x) {
		dataP = {
			openid:x
		}
		var openidUserInfo = getAjaxData("get",dataP,"/api/weixin/user/sever/get/info")
		if(openidUserInfo.code==200){
			//将openid加入到session中
			setcodeval("useropenid",openidUserInfo.data.weiXinUser.openid);
			setcodeval("userid",openidUserInfo.data.weiXinUser.id);
		}else{
			promptBtnFun(openidUserInfo.msg)
		}
		
	}
	
	
	// 通过活动id和flag获取奖励计划id
	function getAwardId (actflag,actid) {
		$.ajax({
			type:"post",
			url:baseUrl + "/api/award/plan/get/award/plan/id",
			data:{
				activityFlag:actflag,
				activityId:actid
			},
			success:function(data){
				awardId = data.data.awardPlanId;
			},
			error:function(err){

			}
		})
	}
	
	function getConfigInfo () {
		var configInfo ;
		//获取网页配置信息
		$.ajax({
			type: "get",
			url: baseUrl + "/api/wechat/get/web/config",
			async: false,//同步
			data: {
				url: window.location.href
			},
			success: function(data) {
				if(data.code == 200){
					configInfo = data.data
				}
				
			}
		});
		return configInfo
	}
	
	//精确计算减法
	function floatSub(arg1,arg2){    
	    var r1,r2,m,n;    
	    try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}    
	    try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}    
	    m=Math.pow(10,Math.max(r1,r2));    
	    //动态控制精度长度    
	    n=(r1>=r2)?r1:r2;    
	    return ((arg1*m-arg2*m)/m).toFixed(n);    
	} 
	
	//精确计算乘法
	function multiply(arg1, arg2) {
	    var r1 = arg1.toString(), r2 = arg2.toString(), m, resultVal, d = arguments[2];
	    m = (r1.split(".")[1] ? r1.split(".")[1].length : 0) + (r2.split(".")[1] ? r2.split(".")[1].length : 0);
	    resultVal = Number(r1.replace(".", "")) * Number(r2.replace(".", "")) / Math.pow(10, m);
	    return typeof d !== "number" ? Number(resultVal) : Number(resultVal.toFixed(parseInt(d)));
	}
	


