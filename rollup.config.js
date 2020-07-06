import url from '@rollup/plugin-url'

const src = 'src'
const dest = 'dist'

export default {
  input: `${src}/index.js`,
  output: {
    dir: dest,
    format: 'iife',
    entryFileNames: '[name].[hash].js',
    assetFileNames: '[name].[hash][extname]',
  },
  plugins: [url()],
}
