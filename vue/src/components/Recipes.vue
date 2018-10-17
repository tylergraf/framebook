
<template>
  <div>
    <ul>
      <li v-for="recipe in recipes">
        <router-link v-bind:to="'/recipe/' + recipe._id">{{ recipe.title }}{{ recipe.subtitle }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import 'cookbook-service/service-es5'

export default {
  name: 'recipes',
  data () {
    return {
      recipes: []
    }
  },
  created: async function () {
    const service = window.CookbookService
    this.recipes = await service.recipes(this.$route.params.id)
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
