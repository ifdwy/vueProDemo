<template>
	<div>
		<div class="hg-li-img">
					<img :src="imgPath" style="width: 80%;">
				</div>
				<div class="hg-li-content">
					<p class="hg-li-title">
					<router-link to="/goods/hotgoods/goodsContent">商品名称</router-link>
					</p>
					<p class="sale">月销</p>
					<div class="price">
						<div style="float: left;margin-right: 30px;">价格</div>
						<div style="float: right;">
							<div style="float: left;">
								<img id="addImg" src="static/image/goods/plus.png" style="width: 80%; float: left;" @click="add">
							</div>
							{{counter}}
							<div style="float: right;">
								<img id="delImg" src="static/image/goods/substract.png" style="width: 80%; float: right;" @click="del">
							</div>
						</div>
					</div>
				</div>
		
	</div>
</template>

<script>
	
export default{
	props: ['imgPath'],
	components: {

	},
	data(){
		return {
			counter: 0,
		}
	},
	methods: {
		add(){
			$("#addImg").attr("src","static/image/goods/activePlus.png");
			this.counter +=1;
			this.$emit('test',this.counter)
		},

		del(){
			$("#delImg").attr("src","static/image/goods/activeSubstract.png");
			//计数
			if(this.counter ==0 ){
				this.counter =0;
			}else{
				this.counter -=1;
				this.$emit('test',this.counter)
			}
		}
	}

}

</script>

<style>
.hg-li-img{
	display: block;
	float: left;
	width: 80px;
	height: 80px;
	margin-right: 10px;
}

.hg-li-content{
}

.hg-li-title{
	margin-top: 10px;
	font-size: 20px;

}

.sale{
	margin-top: 5px;
}

.price{
	margin-top: 10px;
}

.addColor{
	background-color: #ADD8E6;
}
</style>