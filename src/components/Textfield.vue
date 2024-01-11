<template>
  <input
    v-model="model"
    v-bind="$attrs"
    class="ct-textfield ct-input__element"
    :class="{
      [themeClass]: true,
      'ct-input--required required': required
    }"
    :name="name"
    :placeholder="placeholder"
    :required="required"
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
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: [Boolean, String],
      default: undefined
    }
  },

  data: ({ value }) => ({
    model: typeof value === 'string' ? value : undefined
  }),

  watch: {
    model() {
      if (typeof this.model === 'string') {
        this.$emit('input', this.model)
      }
    },

    value() {
      if (typeof this.value === 'string') {
        this.model = this.value
      }
    }
  }
}
</script>
