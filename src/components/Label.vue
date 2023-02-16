<template>
  <label
    class="ct-label"
    :class="{
      [themeClass]: true,
      [`ct-label--${size}`]: size
    }"
  >
    <slot />
  </label>
</template>

<script>
import ThemeMixin from '../mixins/theme'

export default {
  mixins: [ThemeMixin],

  props: {
    size: {
      type: String,
      default: 'regular'
    }
  }
}
</script>
