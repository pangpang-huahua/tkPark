//'use strict';
//
//var city = {
//  name: '成都',
//  age: 1190
//};
//console.log(city.name, city.age);

//weui.js

//   1   alert 弹出层

//weui.alert('普通的alert');
//weui.alert('带回调的alert', function(){ console.log('ok') });
//var alertDom = weui.alert('手动关闭的alert', function(){
//  return false; // 不关闭弹窗，可用alertDom.hide()来手动关闭
//});
//weui.alert('自定义标题的alert', { title: '自定义标题' });
//weui.alert('带回调的自定义标题的alert', function(){
// console.log('ok')
//}, {
// title: '自定义标题'
//});
//weui.alert('自定义按钮的alert', {
//  title: '自定义按钮的alert',
//  buttons: [{
//      label: 'OK',
//      type: 'primary',
//      onClick: function(){ console.log('ok') }
//  }]
//});

// 多次使用
//var alert = weui.alert('hello');
//alert.hide(function(){
//  weui.alert('world');
//});


// 2 弹出式菜单
//weui.actionSheet([
//  {
//      label: '拍照',
//      onClick: function () {
//          console.log('拍照');
//      }
//  }, {
//      label: '从相册选择',
//      onClick: function () {
//          console.log('从相册选择');
//      }
//  }, {
//      label: '其他',
//      onClick: function () {
//          console.log('其他');
//      }
//  }
//], [
//  {
//      label: '取消',
//      onClick: function () {
//          console.log('取消');
//      }
//  }
//], {
//  className: 'custom-classname',
//  onClose: function(){
//      console.log('关闭');
//  }
//});

//  3   确认弹窗
//weui.confirm('普通的confirm');
//weui.confirm('自定义标题的confirm', { title: '自定义标题' });
//weui.confirm('带回调的confirm', function(){ console.log('yes') }, function(){ console.log('no') });
//var confirmDom = weui.confirm('手动关闭的confirm', function(){
//  return false; // 不关闭弹窗，可用confirmDom.hide()来手动关闭
//});
//weui.confirm('带回调的自定义标题的confirm', function(){ console.log('yes') }, function(){ console.log('no') }, {
//  title: '自定义标题'
//});
//weui.confirm('自定义按钮的confirm', {
//  title: '自定义按钮的confirm',
//  buttons: [{
//      label: 'NO',
//      type: 'default',
//      onClick: function(){ console.log('no') }
//  }, {
//      label: 'YES',
//      type: 'primary',
//      onClick: function(){ console.log('yes') }
//  }]
//});


// 4 dialog，弹窗
//weui.dialog({
//  title: 'dialog标题',
//  content: 'dialog内容',
//  className: 'custom-classname',
//  buttons: [{
//      label: '取消',
//      type: 'default',
//      onClick: function () { alert('取消') }
//  }, {
//      label: '确定',
//      type: 'primary',
//      onClick: function () { alert('确定') }
//  }]
//});

// 主动关闭
//var $dialog = weui.dialog({...});
//$dialog.hide(function(){
//   console.log('`dialog` has been hidden');
//});


// 5  form表单
//weui.form.checkIfBlur('#form', {
//  regexp: {
//      IDNUM: /(?:^\d{15}$)|(?:^\d{18}$)|^\d{17}[\dXx]$/,
//      VCODE: /^.{4}$/
//  }
//});

//表单验证
//正则表达式  \D ：非数字     \d ：数字     \s:空格   \S:非空格      
//		    \w : 字符 ( 字母 ，数字，下划线_ )   \W : 非字符例子：是否有不是数字的字符
//          .（点）——任意字符      \.真正的点      \b : 独立的部分 （ 起始，结束，空格 ）     \B : 非独立的部分
//weui.form.validate('#form', function (error) {
//  if (!error) {
//      var loading = weui.loading('提交中...');
//      setTimeout(function () {
//          loading.hide();
//          weui.toast('提交成功', 3000);
//      }, 1500);
//  }
//  // return true; // 当return true时，不会显示错误
//}, {
//  regexp: {
//      IDNUM: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
//      	   
//      VCODE: /^.{4}$/
//  }
//});

//图片上传
//var gallery = weui.gallery('http://www.baidu.com', {
//  className: 'custom-classname',
//  onDelete: function(){
//      if(confirm('确定删除该图片？')){ console.log('删除'); }
//      gallery.hide(function() {
//          console.log('`gallery` has been hidden');
//      });
//  }
//});

//加载中
//var loading = weui.loading('loading', {
//  className: 'custom-classname'
//});
//setTimeout(function () {
//  loading.hide(function() {
//       console.log('`loading` has been hidden');
//   });
//}, 3000);

//
// 单列picker
//weui.picker([
//{
//  label: '飞机票',
//  value: 0,
//  disabled: true // 不可用
//},
//{
//  label: '火车票',
//  value: 1
//},
//{
//  label: '汽车票',
//  value: 3
//},
//{
//  label: '公车票',
//  value: 4,
//}
//], {
// className: 'custom-classname',
// container: 'body',
// defaultValue: [3],
// onChange: function (result) {
//     console.log(result)
// },
// onConfirm: function (result) {
//     console.log(result)
// },
// id: 'singleLinePicker'
//});
// 多列picker
//weui.picker([{
//  label: '1',
//  value: '1'
//}, {
//  label: '2',
//  value: '2'
//}, {
//  label: '3',
//  value: '3'
//}], [{
//  label: 'A',
//  value: 'A'
//}, {
//  label: 'B',
//  value: 'B'
//}, {
//  label: 'C',
//  value: 'C'
//}], {
//  defaultValue: ['3', 'A'],
//  onChange: function onChange(result) {
//      console.log(result);
//  },
//  onConfirm: function onConfirm(result) {
//      console.log(result);
//  },
//  id: 'multiPickerBtn'
//});
