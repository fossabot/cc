import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import babel from 'rollup-plugin-babel'

export default {
  entry: 'src/index.js',
  format: 'cjs',
  dest: 'dist/index.js',
  sourceMap: true,
  plugins: [
    resolve(),
    commonjs({ include: 'node_modules/**' }),
    babel({ exclude: 'node_modules/**' }),
    json(),
  ],
}
