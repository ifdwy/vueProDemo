<template>
<div id="app">
    <v-header></v-header>
    <v-nav></v-nav>
    <goods></goods>
</div>
</template>

<script>
import header from '@/components/common/header'
import nav from '@/components/common/nav'
import goods from '@/components/goods/goods'
export default{
	components:{
		'v-header':header,
		'v-nav':nav,
		goods
	}
}

</script>

<style>
</style>