
<template>
  <div>
    <ul>
      <li v-for="subcategory in subcategories">
        <router-link v-bind:to="'/subcategory/' + subcategory._id">{{ subcategory.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import 'cookbook-service/service-es5'

export default {
  name: 'subcategories',
  data () {
    return {
      subcategories: []
    }
  },
  created: async function () {
    const service = window.CookbookService
    this.subcategories = await service.subcategories(this.$route.params.id)
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
