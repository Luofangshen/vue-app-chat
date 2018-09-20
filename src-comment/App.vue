<template>
<div>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add @add="addComment"/>
      <Show :comments="comments" @delete="deleteComment"/>
    </div>
  </div>
</div>
</template>

<script>
import Add from './components/Add'
import Show from './components/Show'
export default {
  data () {
    return {
      comments: [{username: '你好', comment: 'Vue还不错的'}, {username: '你好2', comment: 'Vue还不错的'}]
    }
  },
  methods: {
    addComment (comment) {
      this.comments.push(comment)
    },
    deleteComment (index) {
      this.comments.splice(index, 1)
    }
  },
  components: {
    Add,
    Show
  }
}
</script>

<style>

</style>
