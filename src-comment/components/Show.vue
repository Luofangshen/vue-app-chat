<template>
<div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 v-show="!comments.length">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group" v-for="(comment,index) in comments" :key="index">
      <li class="list-group-item">
        <div class="handle">
          <a href="javascript:;" @click="deleteComment(index, comment)">删除</a>
        </div>
        <p class="user"><span >{{comment.username}}</span><span>说:</span></p>
        <p class="centence">{{comment.comment}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    deleteComment (index, comment) {
      if (window.confirm(`确认删除${comment.username}`)) {
        this.$emit('delete', index)
      }
    }
  },
  props: {
    comments: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>

</style>
