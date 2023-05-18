<template>
  <!-- External link -->
  <a
    v-if="isExternal"
    :class="classes"
    :href="link"
  >
    <slot>
      {{ text }}
      <CTIcon v-if="icon" class="ct-link__icon" :symbol="icon" />
    </slot>
  </a>

  <!-- Internal link -->
  <NuxtLink
    v-else
    :class="classes"
    tag="a"
    :to="link"
  >
    <slot>
      {{ text }}
      <CTIcon v-if="icon" class="ct-link__icon" :symbol="icon" />
    </slot>
  </NuxtLink>
</template>

<script>
import ThemeMixin from '../mixins/theme'

export default {
  mixins: [ThemeMixin],

  props: {
    icon: {
      type: String,
      default: undefined
    },
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
