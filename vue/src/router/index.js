import Vue from 'vue'
import Router from 'vue-router'
const Categories = () => import(/* webpackChunkName: "group-categories" */ '@/components/Categories.vue')
const Subcategories = () => import(/* webpackChunkName: "group-subcategories" */ '@/components/Subcategories.vue')
const Recipes = () => import(/* webpackChunkName: "group-recipes" */ '@/components/Recipes.vue')
const Recipe = () => import(/* webpackChunkName: "group-recipe" */ '@/components/Recipe.vue')
const AllRecipes = () => import(/* webpackChunkName: "group-all-recipes" */ '@/components/AllRecipes.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Categories',
      component: Categories
    },
    {
      path: '/category/:id',
      name: 'Subcategories',
      component: Subcategories
    },
    {
      path: '/subcategory/:id',
      name: 'Recipes',
      component: Recipes
    },
    {
      path: '/recipe/:id',
      name: 'Recipe',
      component: Recipe
    },
    {
      path: '/all',
      name: 'AllRecipes',
      component: AllRecipes
    }
  ]
})
