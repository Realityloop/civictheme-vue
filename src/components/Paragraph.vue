<template>
  <div
    v-if="html"
    :class="classes"
    v-html="html"
  />

  <div v-else :class="classes">
    <slot />
  </div>
</template>

<script>
import ThemeMixin from '../mixins/theme'

export default {
  mixins: [ThemeMixin],

  props: {
    html: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'regular'
    },
  },

  computed: {
    classes: ({ size, themeClass }) => ({
      'ct-paragraph': true,
      [themeClass]: true,
      [`ct-paragraph--${size}`]: true
    })
  }
}
</script>
