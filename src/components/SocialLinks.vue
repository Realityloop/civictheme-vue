<template>
  <div
    class="ct-social-links"
    :class="{
      [themeClass]: true,
      'ct-social-links--with-border': border
    }"
  >
    <CTItemList class="ct-social-links__list" :items="items" type="horizontal">
      <template #default="{ item }">
        <CTButton
          class="ct-social-links__button"
          :icon="item.icon"
          kind="link"
          target="_blank"
          :title="item.title"
          type="tertiary"
          :theme="theme"
          :url="item.link"
        >
          <span class="ct-visually-hidden">(Opens in a new tab/window)</span>
        </CTButton>
      </template>
    </CTItemList>
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
