<template>
<div class='nav-title'>
  <slot name="text"></slot>
</div>
</template>

<script>
export default {}
</script>

<style lang="less">
  .nav-title{
    width: 16rem;
    height: 2rem;
    position: fixed;
    font:.8rem/2rem '微软雅黑';
    top: 0;
    text-align: center;
    color: white;
    background-color: rgba(0,0,0,.8);
    z-index: 10;
  }
</style>
