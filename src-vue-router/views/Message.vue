<template>
<div>
 <ul class="tem">
   <li v-for="message in messages" :key="message.id">
     <router-link :to="`/about/message/${message.id}`" >{{message.content}}</router-link>
   </li>
   <router-view :messages="messages"></router-view>
 </ul>
</div>
</template>

<script>
export default {
  data () {
    return {
      messages: []
    }
  },
  mounted () {
    setTimeout(() => {
      this.messages = [
        {id: 0, content: 'message01'},
        {id: 1, content: 'message03'},
        {id: 2, content: 'message05'}
      ]
    }, 1000)
  }
}
</script>

<style>
  .tem{
    margin-left: -30px;
    margin-top: 20px;
  }
</style>
