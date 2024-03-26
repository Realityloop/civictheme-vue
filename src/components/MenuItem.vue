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
      v-if="!isFlyout && hasChildren"
      class="ct-menu__sub-menu__wrapper"
      :class="{
        [`ct-menu__sub-menu__wrapper--level-${level + 1}`]: true,
      }"
      :data-collapsible-panel="isCollapsible"
      :data-collapsible-trigger-no-icon="isCollapsible"
    >
      <CTMenu
        class="ct-menu__sub-menu"
        :level="level + 1"
        :items="item.children"
        :theme="theme"
      />
    </div>

    <!-- Children - Flyout -->
    <CTFlyout v-else-if="isFlyout && hasChildren">
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
          :theme="theme"
        />
      </div>
    </CTFlyout>
  </li>
</template>

<script>
import ThemeMixin from "../mixins/theme"
import CivicThemeCollapsible from '@civictheme/uikit/components/00-base/collapsible/collapsible'
import CivicThemeFlyout from '@civictheme/uikit/components/00-base/flyout/flyout'

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
      default: undefined
    }
  },

  computed: {
    hasChildren: ({ item }) => !!item.children?.length,
    isCollapsible: ({ type }) => type === 'collapsible',
    isFlyout: ({ type }) => type === 'flyout',
  },

  methods: {
    attachJs() {
      try {
        // Attach client side only javascript.
        if (!process.client) return
        if (this.isCollapsible) {
          new CivicThemeCollapsible(this.$el)
        }

        if (this.isFlyout) {
          new CivicThemeFlyout(this.$el)
        }
      }
      catch(e) {
        // eslint-disable-next-line
        console.error(e)
      }
    },
  },

  mounted() {
    this.attachJs()
  },

  watch: {
    item(to) {
      if (to.children.length) {
        this.attachJs()
      }
    }
  }
}
</script>
