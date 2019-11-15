const { terser } = require("rollup-plugin-terser");

module.exports = [
  {
    input: "loader.mjs",
    output: {
      file: "loader.rollup.mjs",
      format: "esm"
    }
  },
  {
    input: "loader.mjs",
    output: {
      file: "loader.rollup-plugin-terser.mjs",
      format: "esm"
    },
    plugins: [terser({ mangle: true })]
  }
];
