## Terser test

Simple recreation of bug in `rollup-plugin-terser`.

```
npm i
npm run build
```

### Original file (`loader.mjs`)

```
import { a as patchEsm, b as bootstrapLazy } from './core-6bb3a07e.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
  });
};

export { defineCustomElements };
```

### terser CLI (`loader.terser.mjs`)

```
import{a as patchEsm,b as bootstrapLazy}from"./core-6bb3a07e.js";const defineCustomElements=(t,e)=>{return patchEsm().then(()=>{bootstrapLazy([["my-component",[[1,"my-component",{first:[1],middle:[1],last:[1]}]]]],e)})};export{defineCustomElements};
```

### rollup (`loader.rollup.mjs`)

```
const a = new Promise();

const defineCustomElements = (win, options) => {
  return a().then(() => {
  });
};

export { defineCustomElements };
```

### rollup-plugin-terser (`loader.rollup-plugin-terser.mjs`)

```
import{a as o,b as a}from"./core-6bb3a07e.js";const e=(e,r)=>o().then(()=>{a([],r)});export{e as defineCustomElements};
```
