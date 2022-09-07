# Svelte components

## What is this?

Can we write components in Svelte and export them to be used in things like Shopify or Drupal.

## Direction

We can write svelte components and use Rollup to generate a bundle that contains our components. We can include this bundle in a script tag on a site and then target div's to generate our components.

For example, we have a "Counter" component written in svelte.

```
//On a page outside of our svelte project:
<head>
  <script defer="defer" src="path/to/bundle.js'" />
</head>

<body>
  <div id="svelte-counter"></div>
</body>

<script>
document.addEventListener("DOMContentLoaded", function (event) {
    var el = document.getElementById('svelte-counter');
    new window.Counter({ target: el });
})
</script>
```

You can additionally pass in props to these components with this syntax:

```
<script>
document.addEventListener("DOMContentLoaded", function (event) {
    var el = document.getElementById('svelte-counter');
    new window.Counter({
        target: el,
        props: { count: 1}
    });
})
</script>
```

## How it works

We write all of our components in Svelte, then we have a `main.js` file that sets them to window variables.

```
//main.js
import Counter from './Counter.svelte';
import Header from './Header.svelte';

window.Counter = function (options) {
    return new Counter(options);
};
window.Header = function (options) {
    return new Header(options);
};
```

Rollup is configured to target `main.js` and generate a build file with our compiled svelte code. It handles both JS and CSS.
