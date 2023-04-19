<template>
  <CTFlyout
    id="mobile-menu"
    panel-classes="ct-mobile-navigation__panel"
    wrapper-classes="ct-mobile-navigation ct-theme-light"
  >
    <template #open-button>
      <CTButton
        class="ct-mobile-navigation-trigger"
        data-flyout-open-trigger=""
        data-flyout-target=".ct-mobile-navigation"
        role="button"
      >
        {{ triggerText }} <CTIcon :symbol="triggerIcon" />
      </CTButton>
    </template>

    <template #close-button>
      <div class="ct-mobile-navigation-close ct-theme-light">
        <CTButton type="tertiary" data-flyout-close-all-trigger>Close <CTIcon symbol="close" /></CTButton>
      </div>
    </template>

    <div v-if="$scopedSlots['content_top']" class="ct-mobile-navigation__content_top">
      <slot name="content_top" />
    </div>

    <div
      v-if="topMenuItems.length || $scopedSlots['top_menu']"
      class="ct-mobile-navigation__top-menu-wrapper"
    >
      <slot name="top_menu" v-bind="{ topMenuItems }">
        <CTMenu
          class="ct-mobile-navigation__top-menu"
          :items="topMenuItems"
          type="flyout"
        />
      </slot>
    </div>

    <div
      v-if="bottomMenuItems.length || $scopedSlots['bottom_menu']"
      class="ct-mobile-navigation__bottom-menu-wrapper"
    >
      <slot name="bottom_menu" v-bind="{ bottomMenuItems }">
        <CTMenu
          class="ct-mobile-navigation__bottom-menu"
          :items="bottomMenuItems"
          type="flyout"
        />
      </slot>
    </div>

    <div v-if="$scopedSlots['content_bottom']" class="ct-mobile-navigation__content_bottom">
      <slot name="content_bottom" />
    </div>
  </CTFlyout>
</template>

<script>
import ThemeMixin from '../mixins/theme'

export default {
  mixins: [ThemeMixin],

  props: {
    bottomMenuItems: {
      type: Array,
      default: () => ([])
    },
    topMenuItems: {
      type: Array,
      default: () => ([])
    },
    triggerIcon: {
      type: String,
      default: 'bars'
    },
    triggerText: {
      type: String,
      default: 'Menu'
    }
  }
}
</script>
