<template>
  <select
    v-model="model"
    class="ct-select ct-input__element"
    :class="{
      [themeClass]: true,
      'ct-checkbox--error error': error,
      'ct-input--required required': required
    }"
    :multiple="multiple"
    :required="required"
  >
    <option
      v-for="option of options"
      :key="option.value"
      :value="option.value"
      v-text="option.label"
    />
  </select>
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
    multiple: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      default: () => ([])
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
