<template>
<div>
  <p>clicked: {{count}} times, count is {{isOdd}}</p>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
  <button @click="incrementOdd">increment if odd</button>
  <button @click="incrementAsync">increment async</button>
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['count']),
    isOdd () {
      return this.count % 2 === 0 ? '偶数' : '奇数'
    }
  },
  methods: {
    increment () {
      this.$store.dispatch('incrementSync')
    },
    decrement () {
      this.$store.dispatch('decrementSync')
    },
    incrementAsync () {
      this.$store.dispatch('incrementAsync')
    },
    incrementOdd () {
      if (this.count % 2 !== 0) {
        this.$store.dispatch('incrementSync')
      }
    }
  }
}
</script>

<style>

</style>
