const baseUrl = process.env.GITPOD_WORKSPACE_ID
  ? `https://8080-${process.env.GITPOD_WORKSPACE_ID}.${process.env.GITPOD_WORKSPACE_CLUSTER_HOST}`
  : 'http://civictheme-vue.ddev.site'

export default {
  buildModules: [
    '@nuxt/postcss8',
    'civictheme-vue/nuxt',
    'druxt-site',
  ],
  druxt: { baseUrl }
}
