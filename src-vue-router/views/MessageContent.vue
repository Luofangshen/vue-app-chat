<template>
<ul class="text">
  <li>id: {{id}}</li>
  <li v-if="messages[id]">content: {{messages[id].content}}</li>
</ul>
</template>

<script>
export default {
  props: {
    messages: Array,
    id: String
  }
}
</script>

<style>
  .text{
    margin-left: -50px;
    margin-top: 30px;
  }
</style>
