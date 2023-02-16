<template>
  <div>
    <a
      :class="`ct-link ${themeClass}`"
      data-popover-trigger=""
      data-popover-trigger-event="click"
      data-popover-trigger-id="data-popover-1"
      aria-live="polite"
    >
      <slot name="trigger">
        {{ trigger || 'Trigger me' }}
      </slot>
    </a>

    <div
      :class="`ct-popover ${themeClass}`"
      data-popover=""
      data-popover-id="data-popover-1"
    >
      <slot>
        <div class="story-placeholder">
          Content placeholder
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
import ThemeMixin from '../mixins/theme'

export default {
  mixins: [ThemeMixin],

  props: {
    trigger: {
      type: String,
      default: undefined
    }
  },

  mounted() {
    require('civictheme/components/01-atoms/popover/popover.js')
  }
}
</script>
