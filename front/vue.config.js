module.exports = {
  devServer: {
    port: 8080,
    // Redirect to Rails API in specific paths
    proxy: {
      '^/api': {
        target: 'http://172.20.0.1:3000/',
        ws: true,
        changeOrigin: true
      }
    }
  }
};
