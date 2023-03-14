<template>
  <component :is="component" :class="`ct-heading ${themeClass}`">
    <slot>{{ text }}</slot>
  </component>
</template>

<script>
import ThemeMixin from '../mixins/theme'

export default {
  mixins: [ThemeMixin],

  props: {
    text: {
      type: String,
      default: undefined
    },
    level: {
      type: [Number, String],
      default: 2
    }
  },

  computed: {
    component: ({ level }) => `h${level}`
  }
}
</script>
