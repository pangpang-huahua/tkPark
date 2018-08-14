//从后台获取所有的车辆
let allrecords = [{
		platenumber1:'京A LJK90K',
		platenumber:'京A LJK90K',
		autopayment: true
	},{
		platenumber1:'川A OJK90K',
		platenumber:'川A OJK90K',
		autopayment: false
	},{
		platenumber1:'浙A UJK90K',
		platenumber:'浙A UJK90K',
		autopayment: false
	},{
		platenumber1:'京A DJK90K',
		platenumber:'京A DJK90K',
		autopayment: true
	}]

for(let value of allrecords){
	value.platenumber1 = value.platenumber1.substr(0,1) + "*";
	value.platenumber = "***"+value.platenumber.substr(-2)
}

