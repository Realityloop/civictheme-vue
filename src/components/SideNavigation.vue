<template>
  <div
    class="ct-side-navigation"
    :class="themeClass"
  >
    <div
      class="ct-skip-link"
      :class="themeClass"
    >
      <a
        class="ct-link ct-skip-link__link ct-visually-hidden ct-focusable"
        :class="themeClass"
        href="#main-content"
        title="Skip to main content"
      >
        Skip to main content
      </a>
    </div>

    <CTHeading v-if="title" class="ct-side-navigation__title" :text="title" />

    <CTMenu class="ct-side-navigation__menu" :items="items" />
  </div>
</template>

<script>
import ThemeMixin from '../mixins/theme'

export default {
  mixins: [ThemeMixin],

  props: {
    items: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      default: undefined
    }
  }
}
</script>
