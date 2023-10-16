<template>
  <div
    class="ct-checkbox"
    :class="{
      [themeClass]: true,
      'ct-checkbox--disabled': disabled,
      'ct-checkbox--error': error
    }"
  >
    <input
      v-model="model"
      :disable="disabled"
      class="ct-checkbox__element"
      :required="required"
      type="checkbox"
    >
    <span class="ct-checkbox__state" />
    <label
      :class="{
        'ct-checkbox__label': true,
        'ct-checkbox__label--disabled': disabled,
      }"
    >
      <slot>{{ label }}</slot>
    </label>
  </div>
</template>

<script>
import ThemeMixin from '../mixins/theme'

export default {
  mixins: [ThemeMixin],

  props: {
    disabled: {
      type: Boolean,
      default: false
    },
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
