import vue from "rollup-plugin-vue";
import commonjs from "rollup-plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import tailwind from "tailwindcss";

export default [
  // ESM build to be used with webpack/rollup.
  {
    input: "src/index.js",
    output: {
      format: "esm",
      file: "dist/library.esm.js"
    },
    plugins: [
      commonjs(),
      postcss({
        plugins: [tailwind(), autoprefixer()]
      }),
      vue()
    ]
  },
  // Browser build.
  {
    input: "src/index.js",
    output: {
      name: "VueImageChooser",
      format: "iife",
      file: "dist/library.js"
    },
    plugins: [
      commonjs(),
      postcss({
        plugins: [tailwind(), autoprefixer()]
      }),
      vue()
    ]
  }
];
