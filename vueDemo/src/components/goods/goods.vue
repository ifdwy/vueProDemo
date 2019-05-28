<template>
	<div>
		<v-header></v-header>
		<goodsnav></goodsnav>
		<div class="g-nav">
		<ul class="g-ul">
			<li><router-link to="/goods/hotgoods">热销榜</router-link></li>
			<li><router-link to="/goods/setmeal">套餐系列</router-link></li>
			<li><router-link to="/goods/sweet">甜品/饮料</router-link></li>
			<li><router-link to="/goods/snack">美味小吃</router-link></li>
		</ul>
		</div>

		<div class="g-content">
			<router-view/>
		</div>

	</div>

</template>


<script>
import header from "@/components/common/header"
import goodsnav from "@/components/goods/goodsnav"
export default{
	data(){
		return{

		}
	},
	methods:{

	},
	components:{
		goodsnav,
		"v-header": header
  	}
}

</script>

<style>
.g-nav{
	position: fixed;
	width: 100px;
	height:　auto;
	margin-top: 160px;
}

.g-content{
	position: fixed;
	display: block;
	width: 250px;
	margin-top: 160px;
	margin-left: 110px;
}

.g-nav .g-ul{
	background-color: #eee;
}

.g-nav .g-ul li{
	display: block;
	width: 100px;
	height: 100px;
	line-height: 50px;
	margin-left: 20px;
}
</style>