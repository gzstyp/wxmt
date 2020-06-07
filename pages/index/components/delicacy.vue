<template>
	<view>
		<view class="prefer-posi">
			<!-- 筛选区 -->
			<view class="delica-view">
				<view class="delica-list delica-grow" @click="multiple()">
					<text>{{synthesize}}</text>
					<image src="../../../static/images/paixu.png" class="left-image" mode="widthFix"></image>
				</view>
				<view class="delica-grow" @click="sales()">销量最高</view>
				<view class="delica-grow" @click="spDed()">配置最快</view>
				<view class="delica-grow" @click="unIon()">津贴联盟</view>
				<view class="delica-list delica-right" @click="scReen()">
					<text>筛选</text>
					<image src="../../../static/images/shaixuan.png" mode="widthFix"></image>
				</view>
			</view>
			<!-- 综合排序 -->
			<view class="sortlist sortliteltle" v-if="drop">
				<block v-for="(item,index) in sortList" :key="index">
					<text :class="{acviteb:index == current}" @click="sortClick(index,item.name,item.screen,item.nums)">{{item.name}}</text>
				</block>
			</view>
			<!-- 多个筛选区 -->
			<view class="sortlist sortlist-view" v-if="sortmen">
				<!-- 多选 -->
				<block v-for="(item,index) in screenData" :key="index">
					<view class="sortlist-title">{{item.title}}</view>
					<view class="sortlist-flex">
						<block v-for="(itemData,indexs) in item.datas" :key="indexs">
							<text class="Choice" :class="{scractive: itemData.id == 2}" @click="screenChoice(indexs,itemData.sign,itemData.name)">{{itemData.name}}</text>
						</block>
					</view>
				</block>
				<!-- 单选 -->
				<block v-for="(item,index) in persion" :key="index">
					<view>
						<view class="sortlist-title">{{item.title}}</view>
						<view class="sortlist-flex">
							<block v-for="(itemData,indexs) in item.datas" :key="indexs">
								<text class="Choice" :class="{scractive: itemData.id == scrNum}" @click="persionChoice(indexs,itemData.per)">{{itemData.name}}</text>
							</block>
						</view>
					</view>
				</block>
				<!-- 置底 -->
				<view class="sortlist-bottom">
					<text @click="empty()">清空</text>
					<text @click="flag && complate()">确定</text>
				</view>
			</view>
			<!-- 阴影效果 -->
			<view class="yin" v-if="yin" @click="backClick()"></view>
		</view>
	</view>
</template>

<script>
	export default{
		methods : {
			multiple : function(){
				this.index++;
				if(this.index % 2 == 0){
					this.drop = false;
				}else{
					this.drop = true;
				}
			},
			scReen : function(){
				this.indexMen++;
				if(this.indexMen % 2 == 0){
					this.sortmen = false;
				}else{
					this.sortmen = true;
				}
			},
			/* 销量最高 */
			sales : function(){
				
			},
			/* 配置最快 */
			spDed : function(){
				
			},
			/* 津贴联盟 */
			unIon : function(){
				
			},
			sortClick : function(index,name,screen,nums){
				
			},
			screenChoice : function(index,sign,name){
				
			},
			empty : function(){
				
			},
			complate : function(){
				
			},
			backClick : function(){
				
			}
		},
		data() {
			return {
				index : 0,
				indexMen : 0,
				drop : false,
				sortmen : false,
				yin : false,
				synthesize: '综合排序',
				current : 0,
				scrNum : 0,
				sortList : [
					{
						"name" : "综合排序",
						"screen":"_id",
						"nums":1
					},{
						"name" : "起送价最低",
						"screen":"delivering",
						"nums":1
					},{
						"name" : "配送费最低",
						"screen":"physical",
						"nums":1
					},{
						"name" : "人均高到低",
						"screen":"capita",
						"nums":-1
					},{
						"name" : "人均低到高",
						"screen":"capita",
						"nums":1
					}
				],
				/* 筛选(多选) */
				screenData : [
					{
						"title" : "商家特色",
						"datas" : [
							{
								"id" : 1,
								"sign" : "duration",
								"name" : "配送最快"
							},
							{
								"id" : 1,
								"sign" : "deliver",
								"name" : "0元起送"
							},
							{
								"id" : 1,
								"sign" : "physi",
								"name" : "免费配送"
							}
						]
					}
				],
				persion : [
					{
						"title" : "人均价",
						"datas" : [
							{
								"id" : "1",
								"name" : "20元以下",
								"per" : {
									"$lt":20
								}
							},
							{
								"id" : "2",
								"name" : "20-40元",
								"per" : {
									"$lte":40,
									"$gte":20
								},
							},
							{
								"id" : "3",
								"name" : "40元以上",
								"per" : {
									"$gte":40
								}
							}
						]
					}
				]
			}
		},
	}
</script>

<style scoped>
	.yin{
		background: rgba(0,0,0,0.5);
		position: fixed;
		top: 0;
		left: 0; 
		right: 0;
		bottom: 0;
	}
	.prefer-posi{
		position: absolute;
		left: 0;
		right: 0;
		width: 100%;
		z-index: 99;
	}
	.delica-view image{
		width: 30upx;
		height: 30upx;
		display: block;
	}
	.delica-view{
		font-size: 30upx;
		display: flex;
		align-items: center;
		color: #666666;
		height: 70upx;
		padding: 0 15upx;
		background: #FFFFFF;
	}
	.delica-list{
		display: flex;
		align-items: center;
	}
	.delica-right{
		justify-content: flex-end;/* 排在最后边 */
		flex-grow: 5;/* 占据5个份数 */
	}
	.delica-grow{
		flex-grow: 1;
	}
	.sortlist{
		background: #FFFFFF;
	}
	.sortliteltle text{
		padding: 0 15upx;
		display: block;/* 防止并排显示 */
		font-size: 30upx;
		height: 70upx;
		line-height: 70upx;
		border-bottom: 1rpx solid #ededed;
	}
	.acviteb{color: #f89903 !important}
	/* 选择，相对定位 */
	.sortlist-view{
		height: 450upx;
		overflow: hidden;
		overflow-y: scroll;
		position: relative;
	}
	.sortlist-title{
		padding: 0 15upx;
		font-size: 30upx;
		height: 60upx;
		line-height: 60upx;
	}
	.Choice{
		font-size: 28upx;
		background: #F89903;
		height: 55upx;
		line-height: 55upx;
		color: #666666;
		width: calc((100/3) - 15upx) !important;
		margin: 7.5upx;
		text-align: center;
		display: block;
		border-radius: 6upx;
		padding-top: 0upx;
		padding-right: 11upx;
		padding-bottom: 0upx;
		padding-left: 8upx;
	}
	.sortlist-flex{
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		margin-bottom: 30upx;
	}
	.sortlist-bottom{
		background: #FFFFFF;
		height: 80upx;
		border-top: 1upx solid #e4e4e4;
		display: flex;
		justify-content: space-around;
		align-items: center;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
	}
	.sortlist-bottom text{
		flex-grow: 1;
		height: 80upx;
		line-height: 80upx;
		align-items: center;
		text-align: center;
	}
	.sortlist-bottom text:nth-child(1){border-right:1upx solid #e4e4e4;}
	.sortlist-bottom text:nth-child(2){background: #ffd348;}
	/* 多选 */
	.scractive{background: #fef6df !important;color:#f29909 !important;}
</style>
