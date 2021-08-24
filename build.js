const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd

require('esbuild').build({
  entryPoints: ['./src/index.ts'],
  // outdir: './dist',
  outfile: './dist/competit.js',
  format: 'esm',
  target: ['es2019'],
  bundle: true,
  minify: isProd,
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  },
  watch: isDev && {
    onRebuild(error, _result) {
      console.log('rebuild')
      if (error) {
        console.error('watch build failed:', error)
      } else {
        console.error('watch build succeeded')
        copyDemo()
      }
    }
  },
}).then(_result => {
  copyDemo()
})

async function copyDemo() {
  await require('fs/promises').copyFile('./dist/competit.js', './demo/competit.js')
}
