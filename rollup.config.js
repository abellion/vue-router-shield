import { babel } from '@rollup/plugin-babel';

export default {
  input: './src/index.js',

  output: [
    {
      file: 'dist/index.esm.js',
      format: 'esm'
    },
    {
      file: 'dist/index.cjs.js',
      format: 'cjs'
    }
  ],

  plugins: [
    babel({ babelHelpers: 'bundled' })
  ]
}
