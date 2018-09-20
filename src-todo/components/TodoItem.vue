<template>
<li @mouseenter="isShow = true" @mouseleave="isShow = false">
  <label>
    <input type="checkbox" v-model="todo.isCheck"/>
    <span>{{todo.content}}</span>
  </label>
  <button class="btn btn-danger" v-show="isShow || todo.isCheck" @click="delItem">删除</button>
</li>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data () {
    return {
      isShow: false
    }
  },
  props: ['todo', 'index'],
  methods: {
    ...mapActions(['delTodo']),
    delItem () {
      if (window.confirm(`你确定删除${this.todo.content}吗`)) {
        this.delTodo(this.index)
      }
    }
  }
}
</script>

<style>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
