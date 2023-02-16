<template>
  <span
    class="ct-icon"
    :class="{
      [`ct-icon--${symbol}`]: symbol,
      [`ct-icon--size-${size}`]: size
    }"
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
      default: 'regular'
    }
  }
}
</script>
