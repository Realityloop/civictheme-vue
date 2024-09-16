<template>
  <component
    :is="element"
    class="ct-chip"
    :class="{
      [themeClass]: true,
      'active': model,
      'ct-chip--multiple': isMultiple,
      [`ct-chip--${kind}`]: kind,
      [`ct-chip--${size}`]: size
    }"
    data-component-name="chip"
    :data-chip-dismiss="isMultiple"
  >
    <input
      v-if="kind === 'input'"
      ref="ct-chip-input"
      class="ct-chip__input"
      :type="inputType"
      v-model="model"
    />
    <slot>{{ label }}</slot>
    <CTIcon
      v-if="isMultiple"
      class="ct-chip__dismiss"
      symbol="cancel"
      @click.native="$emit('dismiss')"
    />
  </component>
</template>

<script>
import ThemeMixin from '../mixins/theme'

export default {
  mixins: [ThemeMixin],

  data: ({ value }) => ({
    model: value,
  }),

  props: {
    kind: {
      type: String,
      default: 'default'
    },
    label: {
      type: String,
      default: undefined
    },
    size: {
      type: String,
      default: 'regular'
    },
    isMultiple: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean,
      default: false
    },
  },

  computed: {
    element: ({ kind }) => kind === 'input' ? 'label' : 'span',
    inputType: ({ isMultiple }) => isMultiple ? 'checkbox' : 'radio',
  },

  mounted() {
    try {
      // If the component has been mounted and $el is available
      if (this.$el) {
        // Delete the cached module for chip
        delete require.cache[require.resolve('@civictheme/uikit/components/01-atoms/chip/chip')]

        // Require the chip module again
        require('@civictheme/uikit/components/01-atoms/chip/chip')

        // Set the checked attribute on the input as expected by chip.js
        if (this.model || this.value) {
          this.$refs['ct-chip-input'].setAttribute('checked', 'checked')
        }
      }
    }
    catch(e) {
      // Output an error message to the console if there is an issue
      // eslint-disable-next-line
      console.error(e)
    }
  },

  // Delete require cache for chip component
  beforeDestroy() {
    delete require.cache[require.resolve('@civictheme/uikit/components/01-atoms/chip/chip')]
  },

  watch: {
    model() {
      this.$emit('input', this.model)
    },

    value() {
      this.model = this.value
    }
  }
}
</script>
