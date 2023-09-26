<template>
  <div :class="`ct-social-links ${themeClass} ${border ? 'ct-social-links--with-border': ''}`">
    <ul class="ct-item-list ct-item-list--horizontal ct-item-list--regular ct-social-links__list">

      <li
        v-for="(link, title) in items"
        :key="link"
        class="ct-item-list__item"
      >
        <CTButton
          class="ct-icon ct-button__icon"
          :icon="title.toLowerCase()"
          kind="link"
          target="_blank"
          :title="title"
          type="tertiary"
          :url="link"
        >
          <span class="ct-visually-hidden">(Opens in a new tab/window)</span>
        </CTButton>
      </li>
    </ul>
  </div>
</template>

<script>
import ThemeMixin from '../mixins/theme'

export default {
  mixins: [ThemeMixin],

  props: {
    border: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      default: () => ([]),
    },
    themeClass: {
      type: String,
      default: "ct-theme-light"
    }
  },

  data: () => ({
    page: 1
  }),

  watch: {
    page() {
      this.$emit('page', this.page)
    }
  }
}
</script>
