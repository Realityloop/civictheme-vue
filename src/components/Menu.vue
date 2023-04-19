<template>
  <ul
    :class="`ct-menu ct-menu--level-${level} ${themeClass}`"
    data-component-name="ct-menu"
  >
    <slot v-bind="{ items, level, theme, type }">
      <CTMenuItem
        v-for="item of items"
        :key="item.id"
        :item="item"
        :level="level"
        :theme="theme"
        :type="type"
      />
    </slot>
  </ul>
</template>

<script>
import ThemeMixin from "../mixins/theme"

export default {
  mixins: [ThemeMixin],

  props: {
    items: {
      type: Array,
      required: true
    },
    level: {
      type: [String, Number],
      default: 0
    },
    type: {
      type: String,
      default: 'collapsible'
    }
  }
}
</script>
