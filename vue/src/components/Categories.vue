
<template>
  <div>
    <ul>
      <li v-for="category in categories">
        <router-link v-bind:to="'/category/' + category._id">{{ category.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import 'cookbook-service/service-es5'

export default {
  name: 'categories',
  data () {
    return {
      categories: []
    }
  },
  created: async function () {
    const service = window.CookbookService
    this.categories = await service.categories()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
