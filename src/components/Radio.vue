<template>
  <div
    class="ct-radio"
    :class="{
      [themeClass]: true,
      'ct-checkbox--error': error
    }"
  >
    <input
      v-bind="$attrs"
      :id="inputId"
      v-model="model"
      class="ct-radio__element"
      :name="name"
      :required="required"
      type="radio"
    >
    <span class="ct-radio__state" />
    <label
      :for="inputId"
      class="ct-radio__label"
    ><slot /></label>
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

  data() {
    return {
      model: this.value,
      inputId: `ct-radio-${this._uid}`
    }
  },

  watch: {
    model() {
      this.$emit('input', this.model)
    }
  }
}
</script>
