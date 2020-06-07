<template>
	<view>
		<view class="search-view">
			<image src="../../../static/images/dingwei.png" mode="widthFix"></image>
			<text class="search-text">贵阳市小河区万科大都会</text>
		</view>
		<view class="search-cont">
			<view class="search">
				<image src="../../../static/images/icon_search.png" mode="widthFix" class="search-img"></image>
				<input type="text" placeholder="请输入关键字" disabled/>
			</view>
		</view>
		<!-- 自定义轮播 -->
		<!-- <view>
			<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="5000" :duration="500">
				<block v-for="(item,index) in lable" key="index">
					<swiper-item>
						<block v-for="(listData,index) in item" key="index">
						<view>
							<image :src="listData.img" mode="widthFix" style="width: 20upx;height: 20upx;"></image>
							<text>{{listData.title}}</text>
						</view>
						</block>
					</swiper-item>
				</block>
			</swiper>
		</view> -->
		<view class="swiper-view">
			<swiper :indicator-dots="false" :autoplay="true" :interval="2000" :duration="1000" @change="bannerFun">
				<block v-for="(item,index) in lable" key="index">
					<swiper-item>
						<view class="swiper-item">
							<block v-for="(listData,index) in item" key="index">
							<view class="contenting-img">
								<image :src="listData.img" mode="widthFix" class="uploadimg"/>
								<text>{{listData.title}}</text>
							</view>
							</block>
						</view>
					</swiper-item>
				</block>
			</swiper>
			<!-- 指示灯 -->
			<view class="instruct-view">
				<block v-for="(item,index) in lable.length" :key="index">
					<view class="instruct" :class="{active:index == current}"></view>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current : 0,
				//二维数组
				lable : [
					[
						{
							"img" : "../../static/images/img-meishi1.png",
							"title":"麻辣烫"
						},
						{
							"img" : "../../static/images/img-meishi2.png",
							"title":"青椒鱼"
						},
						{
							"img" : "../../static/images/img-meishi3.png",
							"title":"西红柿炒蛋"
						},
						{
							"img" : "../../static/images/icon-wx.png",
							"title":"日韩料理"
						}
					],
					[
						{
							"img" : "../../static/images/img-meishi3.png",
							"title":"野生蔬菜"
						},
						{
							"img" : "../../static/images/img-meishi2.png",
							"title":"超市便利"
						},
						{
							"img" : "../../static/images/img-meishi1.png",
							"title":"西红柿炒蛋"
						},
						{
							"img" : "../../static/images/icon-qq.png",
							"title":"德国汉堡"
						}
					],
					[
						{
							"img" : "../../static/images/img-meishi3.png",
							"title":"野生蔬菜"
						},
						{
							"img" : "../../static/images/img-meishi2.png",
							"title":"超市1"
						},
						{
							"img" : "../../static/images/img-meishi1.png",
							"title":"西红2"
						},
						{
							"img" : "../../static/images/icon-qq.png",
							"title":"德国2"
						}
					]
				]
			}
		},
		methods:{
			bannerFun : function(event){
				this.current = event.detail.current;
			}
		}
	}
</script>
<!-- scoped表示仅在当前的页面有效,而不是全局的样式 -->
<style scoped>
	.search-view image{
		width: 35upx;height: 35upx;
	}
	.search-view{
		font-size: 30upx;
		font-weight: bold;
		display: flex;
		align-items: center;
		height: 80upx;
	}
	.search-text{
		padding: 0 10upx;
	}
	/* 搜索开始 */
	.search-img{
		margin: auto 0 auto 20upx;
		width: 40upx;
		height: 40upx;
	}
	.search{
		height: 70upx;
		line-height: 70upx;
		width: 100%;
		display: flex;
		flex-direction: flex;
		background: #eff3f4;
		border-radius:10upx;
	}
	.search input{
		height: 70upx;
		line-height: 70upx;
		width: 100%;
		font-size: 25upx;
		color: #666666;
	}
	.search-cont{
		display: flex;
		justify-content: space-between;
		height: 70upx;
		line-height: 70upx;
		align-items: center;
	}
	/* 搜索结束 */
	/* 轮播开始 */
	swiper{height: 320upx !important;}
	/* 九宫格 */
	.swiper-item{
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		height: 320upx;
	}
	.contenting-img{
		width: calc(100%/5 - 12upx) !important;
		margin: 6upx;
		position: relative;
		text-align: center;
	}
	.contenting-img text{margin-top: 20upx;font-size: 25upx;}
	.uploadimg{
		width: 70upx;
		height: 70upx;
		border-radius: 50upx;
		display: block;
		margin: 0 auto;
	}
	/* 轮播结束 */
	/* 指示灯 */
	.instruct-view{
		display: flex;
		justify-content: center;
		padding-top: 10upx;
	}
	.instruct{
		background: #e6e6e6;
		height: 10upx;
		width: 30upx;
		border-radius: 50upx;
		margin: 0 10upx;
	}
	.active{background: #fba222 !important}
</style>
