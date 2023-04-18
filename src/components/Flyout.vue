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
    try {
      // eslint-disable-next-line nuxt/no-env-in-hooks
      if (process.client) require('civictheme/components/00-base/flyout/flyout')
    }
    catch(e) {
      // eslint-disable-next-line
      console.error(e)
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
