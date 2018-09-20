<template>
<div>
  <ul>
    <li v-for="(newsb, index) in news" :key="index">{{newsb}}</li>
  </ul>
</div>
</template>

<script>
export default {
  data () {
    return {
      news: ['new001', 'news002', 'news003']
    }
  }
}
</script>

<style>

</style>
