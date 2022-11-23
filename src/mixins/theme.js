export default {
  props: {
    theme: {
      type: String,
      default: 'light'
    }
  },

  computed: {
    themeClass: ({ theme }) => `ct-theme-${theme}`
  }
}
