<template>
  <input
    :class="`ct-textfield ct-input__element ${themeClass}`"
    :placeholder="placeholder"
    :type="type"
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
    type: {
      type: String,
      default: 'text'
    }
  },

  data: ({ value }) => ({
    model: value
  })
}
</script>
