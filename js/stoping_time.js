
function getStopingTime (entryTime , leaveTime) {
	var entry_time = new Date(entryTime);
	var leave_time = new Date(leaveTime);
	var entry_time_second = entry_time.getTime();
	var leave_time_second = leave_time.getTime();
	var totle_second = (leave_time_second - entry_time_second)/1000; 
	var days = parseInt(totle_second/60/60/24);
	var hours = parseInt((totle_second - days*24*60*60)/60/60);
	var minutes = parseInt((totle_second - days*24*60*60 - hours*60*60)/60);
	var seconds = parseInt((totle_second - days*24*60*60 - hours*60*60 - minutes*60))
	
	var stopTime = {
		day: days, 
		hour: hours,
		minutes: minutes,
		seconds: seconds
	}
	return stopTime ;
}
