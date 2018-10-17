
<template>
  <div>
    <header>
			<div>
				<label for="filter">Filter</label>
				<input id="filter" autofocus type="text" v-on:input="_filter" />
			</div>
      <div>
        <input id="collapsed" type="checkbox" v-on:change="_toggleCollapse">
        <label for="collapsed">Collapsed</label>
      </div>
      <span class="flex"></span>
      <p v-if="recipes.length">Showing {{recipes.length}} of {{_allRecipes.length}}</p>
		</header>
    <ul>
      <li v-for="recipe in recipes">
        <Recipe v-bind:recipe="recipe" v-bind:collapsed="collapsed"></Recipe>
      </li>
    </ul>
  </div>
</template>

<script>
  import 'cookbook-service/service-es5'
  import Recipe from '@/components/Recipe.vue'
  import Fuse from 'fuse.js/dist/fuse.js';

  export default {
    name: 'all-recipes',
    components: {
      Recipe
    },
    data () {
      return {
        recipes: [],
        collapsed: false,
        _allRecipes: []
      }
    },
    created: async function () {
      const service = window.CookbookService
      this.recipes = await service.allRecipes()

      this._allRecipes = [...this.recipes];
      let options = {
		      shouldSort: true,
		      threshold: 0.6,
		      location: 0,
		      distance: 100,
		      maxPatternLength: 32,
		      minMatchCharLength: 1,
		      keys: [
		        "title",
		        "subtitle",
		        "ingredients",
		        "directions",
		    	]
		    };
				this.fuse = new Fuse(this._allRecipes, options); // "list" is the item array
    },
    methods: {
      _filter: function(e){

        let value = e.target.value;
        startMeasure("filter");
        if(value){
    			this.recipes = this.fuse.search(value);
        } else {
          this.recipes = [...this._allRecipes];
        }
        stopMeasure();
      },
      _toggleCollapse: function(e){
        startMeasure("collapse");
        this.collapsed = !this.collapsed;
        stopMeasure();
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
    padding-bottom: 20px;
  }
  header {
    margin: 20px 0;
    display: flex;
    align-items: center;

  }
  .flex {
    flex: 1;
  }
</style>
