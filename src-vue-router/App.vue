<template>
<div class="container">
  <h1 class="header">Vue - router</h1>
  <br>
  <div class="row">
    <div class="col-lg-2">
      <div class="list-group">
        <router-link to="/home" class="list-group-item">home</router-link>
        <router-link to="/about" class="list-group-item">about</router-link>
      </div>
    </div>
    <div class="col-lg-8">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
  .router-link-active{
    background-color: coral!important;
  }
  .header{
    padding-bottom: 20px;
    border-bottom: 1px gray solid;
  }
</style>
