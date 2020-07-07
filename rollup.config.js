import url from '@rollup/plugin-url'

const src = 'src'
const dest = 'dist'

export default {
  input: `${src}/index.js`,
  output: {
    dir: dest,
    format: 'umd',
    entryFileNames: '[name].[hash].js',
  },
  plugins: [url()],
  watch: {
    exclude: ['dist', 'node_modules', '.git']
  }
}
