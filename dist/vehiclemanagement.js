'use strict';

//从后台获取所有的车辆
var allrecords = [{
	platenumber1: '京A LJK90K',
	platenumber: '京A LJK90K',
	autopayment: true
}, {
	platenumber1: '川A OJK90K',
	platenumber: '川A OJK90K',
	autopayment: false
}, {
	platenumber1: '浙A UJK90K',
	platenumber: '浙A UJK90K',
	autopayment: false
}, {
	platenumber1: '京A DJK90K',
	platenumber: '京A DJK90K',
	autopayment: true
}];

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = allrecords[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var value = _step.value;

		value.platenumber1 = value.platenumber1.substr(0, 1) + "*";
		value.platenumber = "***" + value.platenumber.substr(-2);
	}
} catch (err) {
	_didIteratorError = true;
	_iteratorError = err;
} finally {
	try {
		if (!_iteratorNormalCompletion && _iterator.return) {
			_iterator.return();
		}
	} finally {
		if (_didIteratorError) {
			throw _iteratorError;
		}
	}
}
