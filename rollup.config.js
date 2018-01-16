import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
export default {
  input: 'src/main.js',
  output: {
    file: 'rollup.bundle.js',
    format: 'cjs'
  },
  plugins: [commonjs(), resolve()]
}
