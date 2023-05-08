<template>
  <!-- External link -->
  <a
    v-if="isExternal"
    :class="classes"
    :href="link"
  >
    <slot>{{ text }}</slot>
  </a>

  <!-- Internal link -->
  <NuxtLink
    v-else
    :class="classes"
    tag="a"
    :to="link"
  >
    <slot>{{ text }}</slot>
  </NuxtLink>
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
      default: 'link'
    }
  },

  computed: {
    classes: ({ themeClass }) => ['ct-link', themeClass],
    isExternal: ({ link }) => !link.startsWith('/')
  }
}
</script>
