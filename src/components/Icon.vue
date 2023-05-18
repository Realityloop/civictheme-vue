<template>
  <component
    :title="alt || symbol"
    :class="{
      'ct-icon': true,
      [`ct-icon--size-${size}`]: size
    }"
    :is="svg"
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
    svg: ({ symbol }) => () => import(`civictheme/assets/icons/${symbol}.svg?inline`)
  },
}
</script>
