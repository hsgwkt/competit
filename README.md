# competit

Web Components 開発ライブラリ。

HTML Modules が動くなら、ブラウザ上でそのまま動きます。

テンプレートエンジンについては [petite-vue](https://github.com/vuejs/petite-vue) を参照。

[demo](https://hsgwkt.github.io/competit/demo/)

x-example.html

```html
<div class="counter" :class="{ caution: count > 10 }">
  {{ label }}: {{ count }}
</div>
<button @click="increment">+</button>
<button @click="decrement">-</button>

<script type="module">
  import { defineComponent } from "./competit.js";

  export default defineComponent(import.meta, () => ({
    $props: ["label"],

    label: "count",
    count: 0,

    increment() {
      this.count++;
    },

    decrement() {
      this.count--;
    },
  }));
</script>

<style>
  .counter {
    color: green;

    &.caution {
      color: red;
    }
  }
</style>
```

index.html

```html
<script type="module" src="x-example.html"></script>
<x-example label="demo"></x-example>
```
