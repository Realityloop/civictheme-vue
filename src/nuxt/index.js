import { join } from 'path'

export default function (moduleOptions = {}) {
  // Add CivicTheme CSS.
  this.nuxt.options.css = this.nuxt.options.css || []
  this.nuxt.options.css.push('civictheme/dist/civictheme.css')
  this.nuxt.options.css.push('civictheme/dist/civictheme.variables.css')

  // Add plugin.
  this.addPlugin(join(__dirname, 'plugin.client.mjs'))

  // Register Vue components.
  this.nuxt.hook('components:dirs', dirs => {
    dirs.push({
      path: join(__dirname, '../components'),
      prefix: 'CT'
    })
  })

  // Nuxt Storybook integration.
  this.nuxt.hook('storybook:config', ({ stories }) => {
    stories.push(join(__dirname, '../components/*.stories.*js'))
  })
}
