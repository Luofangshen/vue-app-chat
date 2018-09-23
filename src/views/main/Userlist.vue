<template>
<div class="userlist">
  <NavTitle>
    <span slot="text">通讯录</span>
  </NavTitle>
  userlist
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

<style lang="less">
  .userlist{
    padding-top: 2rem;
  }
</style>
