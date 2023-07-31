<template>
  <li
    class="ct-menu__item"
    :class="{
      [themeClass]: true,
      [`ct-menu__item--level-${level}`]: true,
      'ct-menu__item--has-children': hasChildren,
      'ct-navigation__has-dropdown': isCollapsible && hasChildren
    }"
    v-bind="{
      'data-collapsible': isCollapsible && hasChildren ? '1' : undefined,
      'data-collapsible-collapsed': isCollapsible && hasChildren,
      'data-collapsible-group': isCollapsible && hasChildren ? 'navigation' : undefined,
      'data-collapsible-duration': isCollapsible && hasChildren ? '0' : undefined
    }"
  >
    <slot v-bind="{ item }">
      <CTLink
        class="ct-menu__item__link"
        :data-collapsible-trigger="isCollapsible && hasChildren"
        :text="item.title"
        :link="item.url"
        :theme="theme"
      />
    </slot>

    <!-- Children - Collapsible -->
    <div
      v-if="isCollapsible && hasChildren"
      class="ct-menu__sub-menu__wrapper"
      :class="{
        [`ct-menu__sub-menu__wrapper--level-${level + 1}`]: true,
      }"
      data-collapsible-panel
      data-collapsible-trigger-no-icon
    >
      <CTMenu
        class="ct-menu__sub-menu"
        :level="level + 1"
        :items="item.children"
      />
    </div>

    <!-- Children - Flyout -->
    <CTFlyout v-if="isFlyout && hasChildren">
      <template #open-button>
        <CTButton
          class="ct-mobile-navigation__open-subsection-trigger"
          data-flyout-open-trigger=""
          data-flyout=""
          kind="link"
        >
          <CTIcon symbol="right-arrow-2" />
        </CTButton>
      </template>

      <template #close-button>
        <div class="ct-mobile-navigation-close ct-theme-light">
          <CTButton type="tertiary" data-flyout-close-all-trigger>Close <CTIcon symbol="close" /></CTButton>
        </div>
      </template>

      <div class="ct-mobile-navigation__close-trigger">
        <CTButton kind="link" data-flyout-close-trigger="">
          <CTIcon symbol="left-arrow-outline" />
          {{ item.title }}
        </CTButton>
      </div>

      <div :class="`ct-menu__sub-menu__wrapper ct-menu__sub-menu__wrapper--level-${level + 1}`">
        <CTMenu
          class="ct-menu__sub-menu"
          :items="item.children"
          :level="level + 1"
          type="flyout"
        />
      </div>
    </CTFlyout>
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
    },
    type: {
      type: String,
      default: 'collapsible'
    }
  },

  computed: {
    hasChildren: ({ item }) => !!(item.children || []).length,
    isCollapsible: ({ type }) => type === 'collapsible',
    isFlyout: ({ type }) => type === 'flyout',
  },

  mounted() {
    try {
      if (process.client && this.isCollapsible) {
        delete require.cache[require.resolve('civictheme/components/00-base/collapsible/collapsible')]
        require('civictheme/components/00-base/collapsible/collapsible')
      }

      if (process.client && this.isFlyout) {
        delete require.cache[require.resolve('civictheme/components/00-base/flyout/flyout')]
        require('civictheme/components/00-base/flyout/flyout')
      }
    }
    catch(e) {
      // eslint-disable-next-line
      console.error(e)
    }
  },

  beforeDestroy() {
    if (this.isCollapsible) delete require.cache[require.resolve('civictheme/components/00-base/collapsible/collapsible')]
    if (this.isFlyout) delete require.cache[require.resolve('civictheme/components/00-base/flyout/flyout')]
  }
}
</script>
