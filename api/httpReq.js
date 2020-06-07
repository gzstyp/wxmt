//封装请求 GET,POST

//导入提示
import {hints} from 'api/hints.js'

let httpReq = {
	get : function(url,params){
		return new Promise((success,fail) =>{
			uni.request(
				{
					url:url,
					method:'GET',
					data:params,
					header: {
					    'token': '102420483096'
					},
				}
			).then((data) =>{
				success(data);
			}).catch((err) =>{
				hints.info('连接服务器失败');
				if(fail) fail(err);
			});
		});
	}
}
//导出,方便其他地方调用
export {httpReq}