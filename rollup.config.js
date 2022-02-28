import { babel } from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/index.js',

  output: {
    file: 'dist/index.js',
    format: 'umd',
    name: 'VueRouterShield',
    exports: 'named'
  },

  plugins: [
    babel({ babelHelpers: 'bundled', presets: ['@babel/preset-env'] }), terser()
  ]
}
