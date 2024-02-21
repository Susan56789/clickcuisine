const { defineConfig } = require('@vue/cli-service')
const envPlugin = require('@vitejs/plugin-env');

module.exports = defineConfig({
  plugins: [
    envPlugin()
  ],
  transpileDependencies: true,
  chainWebpack: config => {
    config.plugin('define').tap(definitions => {
      definitions[0]['__VUE_PROD_HYDRATION_MISMATCH_DETAILS__'] = false
      return definitions
    })


  }
})
