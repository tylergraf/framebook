## Purpose

To compare frameworks on a few criteria:

* Payload
* Performance
* PWAness
* Syntax
* Nativeness

## Frameworks
* [Lit](https://polymer.github.io/lit-html/) - https://cookbook-lit.firebaseapp.com
* [Preact](https://preactjs.com/) - https://cookbook-preact.firebaseapp.com
* [Vue](https://vuejs.org/) -  https://cookbook-vue.firebaseapp.com

## Results
#### Payload (Categories Page)
* Lit - `17.8KB`
* Preact - `27.7KB`
* Vue - `112KB`

#### Scripting (Categories Page)
* Lit - `~23ms`
* Preact - `~15ms`
* Vue - `~60ms`

#### All Recipes Filter (type 'a')
* Lit - `~300ms`
* Preact - `~1000ms`
* Vue - `~180ms`

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
The "all recipes" page renders a list of all 600+ recipes with the `recipe` component inside. A text input at the top filters the list to show performance re-rendering the list. Also, there's a collapsed checkbox to collapse the directions and ingredients within each recipe which shows rendering performance of changing props on all components in the list.

## Running Locally
Each framework has a directory with it's own `package.json`.
#### Dev Mode
```bash
cd lit/ # or preact/ or vue/
npm i
npm start
```

#### Prod Mode
```bash
cd lit/ # or preact/ or vue/
npm run build
```

## Deploying
Each app deploys to firebase.
```bash
cd lit/ # or preact/ or vue/
npm run deploy
```
