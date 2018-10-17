## Purpose

To compare frameworks on a few criteria:

* Payload
* Performance
* PWAness
* Syntax differences
* Nativeness differences

## App Requirements

### Pages
* Categories
* Subcategories
* Recipes
* Recipe
* All Recipes

The pages show client-side routing, each route must conditionally load PWA style. Each page shows rendering lists and links within for the router.

The recipe page shows conditional rendering and rendering unsafe html within the page.

### Performance
The "all recipes" page renders a list of all 600+ recipes with the `recipe` component inside. A text input at the top filters the list to show rendering performance re-rendering the list. Also, there's a collapsed checkbox to collapse the directions and ingredients within each recipe. Also shows rendering performance of changing props on all components in the list.
