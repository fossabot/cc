import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/cc.js',
      format: 'cjs',
      sourceMap: true,
    },
    {
      file: 'dist/cc.es.js',
      format: 'es',
      sourceMap: true,
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({ exclude: 'node_modules/**' }),
  ],
  watch: {
    include: 'src/**',
    exclude: 'node_modules/**',
  },
}
