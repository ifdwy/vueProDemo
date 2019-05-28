<template>
	<div>
		<v-header></v-header>
		<goodsnav></goodsnav>
		<div class="ra-scope">sfsdf</div>
		<ratingsList></ratingsList>
	</div>
</template>

<script>
import header from "@/components/common/header"
import goodsnav from "@/components/goods/goodsnav"
import ratingsList from "@/components/ratings/ratingsList"	
export default{
	components:{
		goodsnav,
		"v-header": header,
		ratingsList
  	}
}

</script>

<style>
.ra-scope{
	margin-top: 160px;
	width: 100%;
	height: 150px;
}

</style>