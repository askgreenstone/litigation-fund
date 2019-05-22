// 配置全局接口域名

var globalUrl = '';
var globalMshare = '';
var str = window.location.origin;
// console.log(str);
if(str.indexOf('localhost')>-1){
  globalUrl = 'http://t-www.susongzizhu.cn';
  globalMshare = 'http://t-transfer.green-stone.cn/';
}else{
  globalUrl = window.location.origin;
  globalMshare = 'http://transfer.green-stone.cn/';
}



export default {
  globalUrl : globalUrl,
  globalMshare : globalMshare
}