/*
	1.var定义变量，没有块的概念，可以跨块访问，不能跨函数访问，不初始化出现undefined，不会报错。
	2.let定义变量，只能在块作用域里访问，也不能跨函数访问，对函数外部无影响。
	3.const定义常量，只能在块作用域里访问，也不能跨函数访问，使用时必须初始化(即必须赋值)，而且不能修
*/
const hints = {
	info : function(msg){
		uni.showToast({
			icon:'none',
			title:msg,
			duration:3000
		});
	},
	success : function(msg){
		uni.showToast({
			icon:'success',
			title:msg,
			duration:3000
		});
	}
}
export{hints}