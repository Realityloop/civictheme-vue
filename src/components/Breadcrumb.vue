<template>
  <nav :class="`ct-breadcrumb ${themeClass}`" aria-label="breadcrumb">
    <CTItemList
      class="ct-breadcrumb__links show-xxs-flex hide-m"
      :items="[{ ...breadcrumbs[breadcrumbs.length - 2] }]"
      type="horizontal"
    >
      <template #default="{ item }">
        <CTLink
          class="ct-breadcrumb__links__link"
          v-bind="item"
          :theme="theme"
        >
          <CTIcon class="ct-link__icon" symbol="left-arrow" />
          {{ item.text }}
        </CTLink>
      </template>
    </CTItemList>

    <CTItemList
      class="ct-breadcrumb__links hide-xxs show-m-flex"
      :items="items"
      no-gap
      type="horizontal"
    >
      <template #default="{ item, delta }">
        <!-- Seperator -->
        <CTIcon
          v-if="delta % 2"
          class="ct-breadcrumb__links__separator"
          symbol="right-arrow-1"
        />

        <!-- Crumb -->
        <CTLink
          v-else-if="delta < items.length - 1 || activeLink"
          class="ct-breadcrumb__links__link"
          :class="{
            'ct-breadcrumb__links__link--active': delta === items.length - 1
          }"
          :link="item.link"
          :text="item.text"
          :theme="theme"
        />

        <!-- Active if not link -->
        <span
          v-else-if="delta === items.length - 1 && !activeLink"
          class="ct-breadcrumb__links__link ct-breadcrumb__links__link--active"
          aria-current="location"
          v-text="item.text"
        />
      </template>
    </CTItemList>
  </nav>
</template>

<script>
import ThemeMixin from '../mixins/theme'

export default {
  mixins: [ThemeMixin],

  props: {
    activeLink: {
      type: Boolean,
      default: false
    },
    breadcrumbs: {
      type: [Boolean, Array],
      default: () => ([])
    },
  },

  computed: {
    items: ({ breadcrumbs }) => [].concat(...breadcrumbs.map(o => [o, { link: undefined, text: undefined }])).slice(0, -1)
  }
}
</script>
