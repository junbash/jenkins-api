module.exports = {
  lintOnSave: false,
  outputDir: '../src/main/resources/static',
  devServer: {
    port: 8081,
    proxy: {
      '/api': {
        target: 'http://localhost:8080'
      }
    }
  }
}
