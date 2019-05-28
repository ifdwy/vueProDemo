<template>
	<div class="ratingsList">
		<div class="ratings">
			<span class="all" style="background-color: #87CEFA;">全部</span> 
			<span class="all" style="background-color: #B0E0E6">满意</span>
			<span class="all" style="background-color: #DCDCDC">不满意</span>
		</div>

		<div class="ra-listTittle">只看有内容的评价</div>
		<div class="raList">
			<ul>
				<li>
					<div class="raList-img"></div>
					<div class="li-right">sdsd</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	
export default{

}

</script>

<style>
.ratingsList{
	margin: 20px;
}

.ratings{
}

.all{
	padding: 5px;
}

.ra-listTittle{
	margin-top: 20px;
}

.raList ul li{
	width: 100%;
	height: 150px;
	margin-top: 20px;
}

.raList-img{
	background: url("~/static/image/goods/sz.png");
	width: 80px;
	height: 80px;
	float: left;
}
.li-right{
	float: right;
}
</style>