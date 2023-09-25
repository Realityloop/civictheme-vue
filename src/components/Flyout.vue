<template>
  <div>
    <slot name="open-button">
      <CTButton
        data-flyout-open-trigger=""
        :data-flyout-target="flyoutTarget"
        role="button"
      >
        {{ openButtonText }}
      </CTButton>
    </slot>

    <div
      :class="wrapperClasses"
      :id="id"
      data-flyout=""
      :data-flyout-direction="direction"
      :data-flyout-duration="duration"
      :data-flyout-expanded="expanded"
    >
      <div data-flyout-panel="" :class="panelClasses">
        <slot name="close-button">
          <span data-flyout-close-trigger="">{{ closeButtonText }}</span>
        </slot>

        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import CivicThemeFlyout from 'civictheme/components/00-base/flyout/flyout'

export default {
  props: {
    closeButtonText: {
      type: String,
      default: 'Close'
    },
    direction: {
      type: String,
      default: 'right'
    },
    duration: {
      type: String,
      default: '500',
    },
    expanded: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
      default: undefined
    },
    openButtonText: {
      type: String,
      default: 'Open'
    },
    panelClasses: {
      type: String,
      default: undefined
    },
    target: {
      type: String,
      default: undefined,
    },
    wrapperClasses: {
      type: String,
      default: undefined
    }
  },

  mounted() {
    if (typeof document !== 'undefined') {
      // @TODO - Only target this instance.
      document.querySelectorAll('[data-flyout]').forEach((flyout) => {
        // eslint-disable-next-line no-new
        new CivicThemeFlyout(flyout)
      })
    }
  },

  computed: {
    flyoutTarget: ({ target, id }) => {
      if (target) return target
      if (id) return `#{$id}`
      return false
    }
  }
}
</script>
