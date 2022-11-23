<template>
  <ul
    :class="`ct-menu ct-menu--level-0 ${themeClass}`"
    data-component-name="ct-menu"
  >
    <li
      v-for="item of items"
      :key="item.id"
      class="ct-menu__item ct-menu__item--level-0"
    >
      <NuxtLink
        :class="`ct-link ${themeClass} ct-menu__item__link`"
        :to="item.url"
        v-text="item.title"
      />
    </li>
  </ul>
</template>

<script>
import ThemeMixin from "../mixins/theme"

export default {
  mixins: [ThemeMixin],

  props: {
    items: {
      type: Array,
      require: true
    }
  }
}
</script>
