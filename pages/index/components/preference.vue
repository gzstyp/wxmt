<template>
	<view class="prefer-content">
		<view class="prefer-title">
			<text>为你优选</text>
		</view>
		<scroll-view scroll-x="true" class="scroll" scroll-with-animation="true">
			<view class="prefer-dis">
				<block v-for="(item,index) in preferData" :key="index">
					<view class="prefer-view">
						<image :src="item.image" mode="aspectFill"/>
						<text>{{item.title}}</text>
						<text>{{item.lable}}</text>
					</view>
				</block>
			</view>
		</scroll-view>
		<view>
			<text>{{preferListData.msg || ''}}</text>
			<br/>
			<text>{{preferListData.code || ''}}</text>
			<br/>
			<text>{{preferListData.msg || ''}}{{preferListData.code || ''}}</text>
			<br/>
		</view>
	</view>
</template>

<script>
	export default {
		props : {
			preferListData : ''
		},
		data () {
			return {
				preferData : [
					{
						"title":"特别推荐",
						"image":"../../static/images/scroll-view-01.png",
						"lable":"晚餐必备"
					},
					{
						"title":"甜蜜耦合",
						"image":"../../static/images/scroll-view-02.png",
						"lable":"甜品美食"
					},
					{
						"title":"盐酥鸡",
						"image":"../../static/images/scroll-view-03.png",
						"lable":"油炸美味"
					},
					{
						"title":"燕窝鸡汤",
						"image":"../../static/images/scroll-view-04.png",
						"lable":"美颜美味"
					}
				]
			}
		},
		methods:{
		},
		created(){
		}
	}
</script>

<style>
	.prefer-content{margin: 30upx 0;}
	.prefer-title{
		font-size: 35upx;
		height: 50upx;
		line-height: 50upx;
		margin-bottom: 20upx;
	}
	.scroll{
		white-space: nowrap;/* 此行才能横向滚动效果 */
		width: 100%;
		height: 300upx;
	}
	.prefer-dis{display: flex;justify-content: space-between;}
	.prefer-view{height: 300upx;width: 300upx; padding: 0 8upx;}
	.prefer-view image{width: 300upx;height: 200upx;border-radius: 10upx;}
	.prefer-view text{
		height: 45upx;
		line-height: 45upx;
		display: -webkit-box;/* 文字超出隐藏 */
		-webkit-box-orient:vertical;/* 文字超出隐藏 */
		-webkit-box-clamp:1;/* 文字超出1行隐藏 */
		overflow:hidden;/* 文字超出隐藏 */
	}
	/* 伪元素处理,其中的nth-child(1)是 image 标签 */
	.prefer-view text:nth-child(2){font-size: 30upx;}
	.prefer-view text:nth-child(3){font-size: 27upx;color: #9c9c9c;}
	/* 伪元素处理,表示的是从第2个元素开始是上下间距是0,左右间距是7upx */
	.prefer-view:nth-child(2){padding:0 7upx !important;}
</style>
