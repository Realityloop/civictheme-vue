<template>
  <div
    data-collapsible="1"
    v-bind="{
      'data-collapsible-collapsed': collapsed
    }"
  >
    <div data-collapsible-trigger="">
      <slot name="trigger">{{ trigger }}</slot>
    </div>
    <div data-collapsible-panel="">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    collapsed: {
      type: Boolean,
      default: undefined
    },
    trigger: {
      type: String,
      default: 'Click me'
    }
  },

  mounted() {
    try {
      if (this.$el) {
        delete require.cache[require.resolve('civictheme/components/00-base/collapsible/collapsible')]
        require('civictheme/components/00-base/collapsible/collapsible')
      }
    }
    catch(e) {
      // eslint-disable-next-line
      console.error(e)
    }
  },

  beforeDestroy() {
    delete require.cache[require.resolve('civictheme/components/00-base/collapsible/collapsible')]
  }
}
</script>
