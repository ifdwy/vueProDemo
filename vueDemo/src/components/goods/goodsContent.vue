<template>
	<div id="gd-content">
		<div class="gdcImg"></div>
		<div class="gdcTittle">
			<h3>商品名称</h3>
			<p>月售<span>11111</span>   &nbsp;&nbsp;&nbsp;好评率<span>100%</span></p>
			<p>价格<span>24</span></p>
		</div>

		<div class="gdcDoc">
			<div>商品简介</div>
			<div class="gdcDocContent">fsdfsdfsdfdfddddddddddddddddddddddddddddddddddddd</div>
		</div>

		<ratingsList></ratingsList>
	</div>
</template>

<script>
import ratingsList from "@/components/ratings/ratingsList"	
export default{
	components:{
		ratingsList
  	}
}

</script>

<style>
#gd-content{
	
}

.gdcImg{
	/*background: url("./sz.png");*/
	background: url("~/static/image/goods/gdcImg.jpg");
	width: 100%;
	height: 250px;
}

h3{
	margin: 20px;
}

p{
	margin: 20px;
}

span{
	color: red;
}

.gdcTittle{
	background-color: #FFFAFA;
}

.gdcDoc{
	margin-top: 30px;
	margin-left: 20px;
	width: 100%;
	height: 100px;
	border: 2px solid red;
}

.gdcDocContent{
	margin: 10px;
}
</style>