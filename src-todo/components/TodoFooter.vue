<template>
<div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheck"/>
    </label>
    <span>
          <span>已完成{{checkNum}}</span> / 全部{{todos.length}}
        </span>
    <button class="btn btn-danger" @click="delComplete">清除已完成任务</button>
  </div>
</template>

<script>
import {mapGetters, mapState, mapActions} from 'vuex'
export default {
  computed: {
    ...mapState(['todos']),
    ...mapGetters(['checkNum']),
    isCheck: {
      get: function () {
        return this.checkNum === this.todos.length
      },
      set: function (prop) {
        this.$store.dispatch('allCheck', prop)
      }
    }
  },
  methods: {
    ...mapActions(['delComplete'])
  }
}
</script>

<style>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
