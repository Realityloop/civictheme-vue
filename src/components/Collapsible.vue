<template>
  <component :is="tag"
    data-collapsible="1"
    v-bind="{
      'data-collapsible-collapsed': collapsed
    }"
  >
    <slot name="trigger" :trigger="{ onClick, trigger, triggerClass }">
      <div :class="triggerClass" data-collapsible-trigger="" @click="onClick">
        {{ trigger }}
      </div>
    </slot>

    <div :class="panelClass" data-collapsible-panel="">
      <slot />
    </div>
  </component>
</template>

<script>
export default {
  props: {
    collapsed: {
      type: Boolean,
      default: undefined
    },
    panelClass: {
      type: String,
      default: undefined
    },
    tag: {
      type: String,
      default: 'div'
    },
    trigger: {
      type: String,
      default: 'Click me'
    },
    triggerClass: {
      type: String,
      default: undefined
    }
  },

  mounted() {
    try {
      // If the component has been mounted and $el is available
      if (this.$el) {
        // Delete the cached module for collapsible
        delete require.cache[require.resolve('@civictheme/uikit/components/00-base/collapsible/collapsible')]

        // Require the collapsible module again
        require('@civictheme/uikit/components/00-base/collapsible/collapsible')
      }
    }
    catch(e) {
      // Output an error message to the console if there is an issue
      // eslint-disable-next-line
      console.error(e)
    }
  },

  // Delete require cache for collapsible component
  beforeDestroy() {
    delete require.cache[require.resolve('@civictheme/uikit/components/00-base/collapsible/collapsible')]
  },

  methods: {
    onClick() {
      // Emit the 'click' event to notify parent components that the trigger has been clicked.
      this.$emit('click')
    }
  }
}
</script>
