<template>
  <textarea
    v-model="model"
    v-bind="$attrs"
    class="ct-textarea ct-input__element"
    :class="{
      [themeClass]: true,
      'ct-input--required required': required
    }"
    :name="name"
    :required="required"
    :rows="rows"
    :placeholder="placeholder"
  />
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
    name: {
      type: String,
      default: undefined
    },
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
