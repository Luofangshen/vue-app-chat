<template>
<div class="container">
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="searchName"/>
        <button @click="search">Search</button>
      </div>
    </section>
    <h1 v-if="loading">loading...</h1>
    <h1 v-else-if="error">no found</h1>
    <ShowList :users="users" v-else-if="users"/>
  </div>
</template>

<script>
import ShowList from './components/showList'
import axios from 'axios'
export default {
  data () {
    return {
      searchName: '',
      users: [],
      loading: false,
      error: false
    }
  },
  methods: {
    search () {
      let {searchName} = this
      if (searchName.trim()) {
        this.loading = true
        axios.get(` https://api.github.com/search/users?q=${searchName}`)
          .then(res => {
            this.loading = false
            this.error = false
            let result = res.data
            if (!result.items.length) {
              this.error = true
            }
            this.users = result.items
          })
          .catch(res => {
            this.loading = false
            this.error = true
          })
      }
      this.searchName = ''
    }
  },
  components: {
    ShowList
  }
}
</script>

<style>

</style>
