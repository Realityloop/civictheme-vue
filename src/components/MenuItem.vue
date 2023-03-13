<template>
  <li
    class="ct-menu__item"
    :class="{
      [`ct-menu__item--level-${level}`]: true,
      'ct-menu__item--has-children': hasChildren,
      'ct-navigation__has-dropdown': hasChildren
    }"
    v-bind="{
      'data-collapsible': hasChildren ? '1' : undefined,
      'data-collapsible-collapsed': hasChildren,
      'data-collapsible-group': hasChildren ? 'navigation' : undefined,
      'data-collapsible-duration': hasChildren ? '0' : undefined
    }"
  >
    <slot v-bind="{ item }">
      <CTLink
        class="ct-menu__item__link"
        :text="item.title"
        :link="item.url"
        :data-collapsible-trigger="hasChildren"
      />
    </slot>

    <!-- Children -->
    <div
      v-if="hasChildren"
      class="ct-menu__sub-menu__wrapper"
      :class="{
        [`ct-menu__sub-menu__wrapper--level-${level + 1}`]: true,
      }"
      data-collapsible-panel
    >
      <CTMenu
        class="ct-menu__sub-menu"
        :level="level + 1"
        :items="item.children"
      />
    </div>
  </li>
</template>

<script>
import ThemeMixin from "../mixins/theme"

export default {
  mixins: [ThemeMixin],

  props: {
    item: {
      type: Object,
      require: true,
    },
    level: {
      type: Number,
      default: 0,
    }
  },

  computed: {
    hasChildren: ({ item }) => !!(item.children || []).length
  },

  created() {
    // @TODO - Do this elsewhere?
    if (process.client) require('civictheme/components/00-base/collapsible/collapsible')
  }
}
</script>
