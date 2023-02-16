<template>
  <img
    :class="`ct-image ${themeClass}`"
    :src="src"
    :alt="alt"
  >
</template>

<script>
import ThemeMixin from '../mixins/theme'

export default {
  mixins: [ThemeMixin],

  props: {
    alt: {
      type: String,
      default: undefined
    },
    src: {
      type: String,
      required: true
    }
  }
}
</script>
