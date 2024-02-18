const baseUrl = process.env.GITPOD_WORKSPACE_ID
  ? `https://8080-${process.env.GITPOD_WORKSPACE_ID}.${process.env.GITPOD_WORKSPACE_CLUSTER_HOST}`
  : 'http://civictheme-vue.ddev.site'

export default {
  buildModules: [
    '@nuxt/postcss8',
    'civictheme-vue/nuxt',
    'druxt-site',
  ],
  druxt: {
    baseUrl,
    // @TODO - remove this after druxt-entity@0.29.0
    entity: {
      components: {
        fields: false
      }
    }
  },
  storybook: {
    addons: ['@etchteam/storybook-addon-status']
  },
  build: {
    transpile: [
      'axios',
    ]
  },
  proxy: {
    '/core/profiles/demo_umami/themes/umami/': baseUrl
  }
}
