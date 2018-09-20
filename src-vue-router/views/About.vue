<template>
<div>
  <h1>About</h1>
  <ul class="nav nav-tabs">
    <li role="presentation" class="active"><router-link to="/about/news">News</router-link></li>
    <li role="presentation" class="active"><router-link to="/about/message">Message</router-link></li>
  </ul>
  <div class="view">
    <router-view/>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
  h1{
    margin: 30px;
  }
  .view{
    padding: 10px;
  }
</style>
