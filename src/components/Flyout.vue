<template>
  <div>
    <slot name="open-button">
      <CTButton
        data-flyout-open-trigger=""
        :data-flyout-target="`#${id}`"
        role="button"
      >
        {{ openButtonText }}
      </CTButton>
    </slot>

    <div
      class="flyout"
      :id="id"
      data-flyout=""
      :data-flyout-direction="direction"
      :data-flyout-duration="duration"
      :data-flyout-expanded="expanded"
    >
      <div data-flyout-panel="">
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
      required: true,
    },
    openButtonText: {
      type: String,
      default: 'Open'
    },
  },

  mounted() {
    try {
      if (process.client) require('civictheme/components/00-base/flyout/flyout')
    }
    catch(e) {
      // eslint-disable-next-line
      console.error(e)
    }
  }
}
</script>
