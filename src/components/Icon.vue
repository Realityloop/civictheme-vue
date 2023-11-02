<template>
  <component
    :title="alt || symbol"
    :class="{
      'ct-icon': true,
      [`ct-icon--size-${size}`]: size
    }"
    :is="svgData"
    role="img"
  />
</template>

<script>
export default {
  props: {
    alt: {
      Type: String,
      default: undefined
    },
    svg: {
      type: Object,
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
    svgData: ({ svg, symbol }) => () => svg
      ? svg
      : import(`civictheme/assets/icons/${symbol}.svg?inline`)
  },
}
</script>
