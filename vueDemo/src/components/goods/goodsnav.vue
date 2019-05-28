<template>
	<div class="tab">
      <div class="tab-item">
        <router-link class="nav-item" to="/goods">商品</router-link>
      </div>

      <div class="tab-item">
        <router-link class="nav-item" to="/ratings">评论</router-link>
      </div>

      <div class="tab-item">
        <router-link class="nav-item" to="/seller">商家</router-link>
      </div>

    </div>
</template>

<script>
	
export default{

}

</script>

<style>
a{
  text-decoration: none;
}

.tab{
  display:flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
}

.tab .tab-item{
  position: relative;
  flex: 1;
  margin-top: 150px;
  text-aligen: center;
}

.router-link-active{
  color: red;
}
</style>