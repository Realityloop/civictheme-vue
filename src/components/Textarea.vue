<template>
  <textarea
    v-model="model"
    :class="`ct-textarea ct-input__element ${themeClass}`"
    :rows="rows"
    :placeholder="placeholder"
  />
</template>

<script>
import ThemeMixin from '../mixins/theme.mjs'

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
    rows: {
      type: Number,
      default: 5
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
