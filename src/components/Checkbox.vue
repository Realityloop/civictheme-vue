<template>
  <div
    class="ct-checkbox"
    :class="{
      [themeClass]: true,
      'ct-checkbox--error': error
    }"
  >
    <input
      v-model="model"
      type="checkbox"
      class="ct-checkbox__element"
      :required="required"
    >
    <span class="ct-checkbox__state" />
    <label class="ct-checkbox__label"><slot>{{ label }}</slot></label>
  </div>
</template>

<script>
import ThemeMixin from '../mixins/theme'

export default {
  mixins: [ThemeMixin],

  props: {
    error: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: undefined
    },
    required: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean,
      default: undefined
    }
  },

  data: ({ value }) => ({
    model: value
  }),

  watch: {
    model() {
      this.$emit('input', this.model)
    }
  }
}
</script>
