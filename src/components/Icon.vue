<template>
  <component
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
