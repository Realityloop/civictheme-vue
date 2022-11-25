<template>
  <div
    class="ct-radio"
    :class="{
      [themeClass]: true,
      'ct-checkbox--error': error
    }"
  >
    <input
      type="radio"
      class="ct-radio__element"
      :required="required"
      v-model="model"
    />
    <span class="ct-radio__state" />
    <label class="ct-radio__label"><slot /></label>
  </div>
</template>

<script>
import ThemeMixin from '../mixins/theme.mjs'

export default {
  mixins: [ThemeMixin],

  props: {
    error: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    }
  },

  data: ({ value }) => ({
    model: value
  })
}
</script>
