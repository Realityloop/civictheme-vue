<template>
  <component
    :is="tag"
    :class="`ct-popover ${themeClass}`"
    data-collapsible="1"
    data-collapsible-collapsed=""
    data-collapsible-group=""
    data-collapsible-duration="250"
  >
    <a
      :class="`ct-link ${themeClass} ct-popover__link`"
      :data-collapsible-trigger="true"
      @click="$emit('trigger')"
    >
      <slot name="trigger">
        {{ trigger }}

        <CTIcon symbol="down-arrow-large" />
      </slot>
    </a>

    <component
      :is="tag"
      class="ct-popover__content"
      data-collapsible-panel
      data-collapsible-trigger-no-icon
    >
      <component :is="tag" class="ct-popover__content__inner">
        <slot />
      </component>
    </component>
  </component>
</template>

<script>
import ThemeMixin from '../mixins/theme'

export default {
  mixins: [ThemeMixin],

  props: {
    tag: {
      type: String,
      default: 'div'
    },
    trigger: {
      type: String,
      default: 'Click me'
    }
  },

  mounted() {
    try {
      if (this.$el) {
        delete require.cache[require.resolve('@civictheme/uikit/components/00-base/collapsible/collapsible')]
        require('@civictheme/uikit/components/00-base/collapsible/collapsible')
      }
    }
    catch(e) {
      // eslint-disable-next-line
      console.error(e)
    }
  },

  beforeDestroy() {
    delete require.cache[require.resolve('@civictheme/uikit/components/00-base/collapsible/collapsible')]
  }
}
</script>
