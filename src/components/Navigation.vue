<template>
  <div :class="`ct-navigation ${themeClass} ${dropdownClass}`">
    <h5
      v-if="title"
      class="ct-heading ct-theme-light ct-navigation__title"
      v-text="title"
    />
    <div class="ct-navigation__items">
      <CTMenu
        class="ct-navigation__menu"
        :items="items"
      />
    </div>
  </div>
</template>

<script>
import ThemeMixin from '../mixins/theme.mjs'

export default {
  mixins: [ThemeMixin],

  props: {
    dropdown: {
      type: String,
      default: 'none'
    },
    items: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      default: undefined
    }
  },

  computed: {
    dropdownClass: ({ dropdown }) => `ct-navigation--${dropdown}`
  }
}
</script>
