<template>
  <!-- External link -->
  <a
    v-if="isExternal"
    :class="classes"
    :href="link"
    v-text="text"
  />

  <!-- Internal link -->
  <NuxtLink
    v-else
    :class="classes"
    tag="a"
    :to="link"
    v-text="text"
  />
</template>

<script>
import ThemeMixin from '../mixins/theme'

export default {
  mixins: [ThemeMixin],

  props: {
    link: {
      type: String,
      default: '#'
    },
    text: {
      type: String,
      required: true
    }
  },

  computed: {
    classes: ({ themeClass }) => ['ct-link', themeClass],
    isExternal: ({ link }) => !link.startsWith('/')
  }
}
</script>
