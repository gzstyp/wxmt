<template>
	<view class="contenting">
		<!-- 3.渲染 -->
		 <Search></Search>
		 <!-- :Xxx表示绑定数据,表示父组件的变量名为 preferListData 的数据是 listPreferData  -->
		 <Preference :preferListData="listPreferData"></Preference>
		 <Title></Title>
		 <Delicacy></Delicacy>
		 <Takeout/></Takeout>
	</view>
</template>
<!-- 父组件向子组件传递数据，是通过:Xxx="数据" ,子组件接收方是通过 props:{ 数据 : null } -->
<!-- 父组件调用子组件(即组件的)的方法 showForm(),也就是 组件的 methods.showForm();其中的 goodsForm 是上面定义的 ref="goodsForm" -->
<script>
	//1.导入子组件
	import Search from './components/search.vue';
	import Preference from './components/preference.vue';
	import Title from './components/title.vue';
	import Delicacy from './components/delicacy.vue';
	import Takeout from './components/takeout.vue';
	export default {
		//2.注册组件
		components:{
			Search,
			Preference,
			Title,
			Delicacy,
			Takeout
		},
		/* 一般情况下,是在父组件获取数据再传到子组件!!!???父组件给子组件传值!!!,所以把请求放在父组件来 */
		data () {
			return {
				//为你优选(推荐在父组件获取数据往子组件传值)
				listPreferData : []
			}
		},
		/* 这个是微信小程序的方法 */
		onLoad() {

		},
		/* el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子 */
		mounted() {},
		/* 实例已经创建完成之后被调用 */
		created() {
			this.preference();
		},
		methods: {
			demo1 : function(){
				uni.request({
					url : 'http://api.fwtai.com/storage/getListData',
					method : 'GET',
					data : {},
					header: {
					    'custom-header': 'hello' //自定义请求头信息
					},
					success : function(data){
						console.info(data.data.code);
					},
					fail : function(err) {
						
					},
					complete : function(data){
						
					}
				});
			},
			preference : function(){
				var _this = this;
				uni.request({
					url : 'http://api.fwtai.com/storage/getListData',
					method : 'GET',
					data : {}
				}).then((data) =>{
					_this.listPreferData = data[1].data;
				}).catch((err) => {
					console.info(err);
				});
			},
		}
	}
</script>

<style scoped>
	.contenting{
		margin: 0 15upx;
	}
</style>
