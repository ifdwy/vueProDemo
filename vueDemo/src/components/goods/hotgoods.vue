<template>
	<div>
		<ul class="hg-ul">
			<li><goodsList imgPath="static/image/goods/test.png" @test="fun1"></goodsList></li>
			<li><goodsList imgPath="static/image/goods/sz.png" @test="fun1"></goodsList></li>
			{{a}}

		</ul>
	</div>
</template>

<script>
import goodsList from '@/components/goods/goodsList'
export default{
	data(){
		return{
			a: 0,
		}
	},
	components:{
		goodsList
	},
	methods:{
		fun1(data){
			this.a =data;		
		}
	}

}

</script>

<style>
.hg-ul{
}

.hg-ul li{
	display: block;
	height: 100px;
	margin-left: 10px;
}
</style>