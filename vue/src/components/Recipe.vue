
<template>
  <div>
    <h2 v-html="recipe.title"></h2>
    <h3 v-if="recipe.subtitle" v-html="recipe.subtitle"></h3>
    <template v-if="!collapsed">
      <h4 v-if="recipe.ingredients">Ingredients</h4>
      <p v-if="recipe.ingredients" v-html="recipe.ingredients"></p>
      <h4 v-if="recipe.directions">Directions</h4>
      <p v-if="recipe.directions" v-html="recipe.directions"></p>
    </template>
  </div>
</template>

<script>
import 'cookbook-service/service-es5'

export default {
  name: 'recipe',
  props: {
    recipe: Object,
    collapsed: Boolean
  },
  created: async function () {
    const service = window.CookbookService
    if( this.$route.path.includes('recipe') ) {
      this.recipe = await service.recipe(this.$route.params.id)
    }
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
