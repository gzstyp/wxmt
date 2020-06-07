<template>
	<view class="prefer-title">
		{{lable}}
	</view>
</template>

<script>
	export default{
		data() {
			return {
				'lable': '附近商家'
			}
		},
	}
</script>

<style scoped>
	.prefer-title{
		font-size: 35upx;
		height: 50upx;
		line-height: 50upx;
		margin-bottom:2upx;
	}
</style>
