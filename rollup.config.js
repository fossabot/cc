import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript'

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
    typescript(),
  ],
  watch: {
    include: 'src/**',
    exclude: 'node_modules/**',
  },
}
