module.exports = {
  devServer: {
    // Port of development enviroment
    port: 8080,
    // Redirect to Rails API in specific paths
    proxy: {
      "^/api": {
        target: "http://localhost:3000",
      },
    },
  },
};