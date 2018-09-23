<template>
<div class="personal">
  <NavTitle>
    <span slot="text">我的</span>
  </NavTitle>
  Personal
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
  .personal{
    padding-top: 2rem;
  }
</style>
