module.exports = {
  env: { browser: true, es6: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/recommended'
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/no-v-text-v-html-on-component': 'off'
  }
}
