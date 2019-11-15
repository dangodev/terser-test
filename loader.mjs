import { a as patchEsm, b as bootstrapLazy } from "./core-6bb3a07e.js";

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy(
      [
        [
          "my-component",
          [[1, "my-component", { first: [1], middle: [1], last: [1] }]]
        ]
      ],
      options
    );
  });
};

export { defineCustomElements };
