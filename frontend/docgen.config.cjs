module.exports = {
  componentsRoot: 'src/', // the folder where CLI will start searching for components.
  components: '**/[A-Z]*.vue', // the glob to define what files should be documented as components (relative to componentRoot)
  ignore: '*.test.ts', // optional glob to ignore files
  outDir: 'docs/src',
  outFile: 'index.md'
}