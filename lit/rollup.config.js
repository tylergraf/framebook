import resolve from 'rollup-plugin-node-resolve';
import { terser } from "rollup-plugin-terser";

export default {
  input: `src/cb-app.js`,
  output: {
    format: 'system' ,
    dir: 'dist',
    sourcemap: false
  },
  treeshake: true,
  experimentalCodeSplitting: true,
  plugins: [
    resolve(),
    terser(),
  ]
};
