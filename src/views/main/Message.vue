<template>
<div class="message">
  <NavTitle>
    <span slot="text">消息</span>
  </NavTitle>
  Message
</div>
</template>

<script>
import NavTitle from '../../components/NavTitle'
export default {
  components: {
    NavTitle
  }
}
</script>

<style>
  .message{
    padding-top: 2rem;
  }
</style>
