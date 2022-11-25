<template>
  <div
    class="ct-checkbox"
    :class="{
      [themeClass]: true,
      'ct-checkbox--error': error
    }"
  >
    <input
      type="checkbox"
      class="ct-checkbox__element"
      :required="required"
      v-model="model"
    />
    <span class="ct-checkbox__state" />
    <label class="ct-checkbox__label"><slot /></label>
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
