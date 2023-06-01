<template>
  <input
    v-model="model"
    class="ct-textfield ct-input__element"
    :class="{
      [themeClass]: true,
      'ct-input--required required': required
    }"
    :required="required"
    :placeholder="placeholder"
    :type="type"
  >
</template>

<script>
import ThemeMixin from '../mixins/theme'

export default {
  mixins: [ThemeMixin],

  props: {
  //   error: {
  //     type: Boolean,
  //     default: false
  //   },
    placeholder: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'text'
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
