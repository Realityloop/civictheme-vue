<template>
  <div
    class="ct-radio"
    :class="{
      [themeClass]: true,
      'ct-checkbox--error': error
    }"
  >
    <input
      v-model="model"
      v-bind="$attrs"
      class="ct-radio__element"
      :name="name"
      :required="required"
      type="radio"
    >
    <span class="ct-radio__state" />
    <label class="ct-radio__label"><slot /></label>
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
    name: {
      type: String,
      default: undefined
    },
    required: {
      type: Boolean,
      default: false
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
