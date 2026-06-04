<template>
  <component
    :is="svg"
    :title="alt || symbol"
    :class="{
      'ct-icon': true,
      [`ct-icon--size-${size}`]: size
    }"
    role="img"
  />
</template>

<script>
export default {
  props: {
    alt: {
      type: String,
      default: undefined
    },
    symbol: {
      type: String,
      default: 'account'
    },
    size: {
      type: String,
      default: undefined
    }
  },

  computed: {
    svg() {
      const symbol = this.symbol
      return () => import(`@civictheme/uikit/assets/icons/${symbol}.svg?inline`)
        .then((m) => {
          if (m.default && (m.default.render || m.default.template)) {
            return m.default
          }
          return { render: (h) => h('span', { class: 'ct-icon__fallback' }) }
        })
        .catch(() => ({
          render: (h) => h('span', { class: 'ct-icon__fallback' })
        }))
    }
  },
}
</script>
