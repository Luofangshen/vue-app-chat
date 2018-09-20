<template>
<div>
  <div class="todo-container">
    <div class="todo-wrap">
      <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="test" @keyup.enter="add"/>
      </div>
      <TodoList />
      <TodoFooter />
    </div>
  </div>
</div>
</template>

<script>
import {mapState} from 'vuex'
import TodoFooter from './components/TodoFooter'
import TodoList from './components/TodoList'
export default {
  data () {
    return {
      test: ''
    }
  },
  computed: {
    ...mapState(['todos'])
  },
  methods: {
    add () {
      if (this.test.trim()) {
        let todo = {content: this.test, isCheck: false}
        this.$store.dispatch('AddTodo', todo)
        this.test = ''
      }
    }
  },
  components: {
    TodoFooter,
    TodoList
  },
  watch: {
    todos: {
      handler: function (newtodos) {
        let newStr = JSON.stringify(newtodos)
        window.localStorage['todos'] = newStr
      },
      deep: true
    }
  }
}
</script>

<style>

</style>
