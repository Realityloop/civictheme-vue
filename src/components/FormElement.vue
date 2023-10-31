<template>
  <div
    :class="`ct-form-element ${themeClass} ct-form-element--${type} ct-form-element--label--undefined ct-form-element--label--after`"
  >
    <!-- Label: before -->
    <label
      v-if="isLabelBefore"
      :class="`ct-label ${themeClass} ct-label--regular`"
      :for="`input-${id}`"
      v-text="label"
    />

    <div
      class="ct-input ct-input--default"
      :class="{
        [themeClass]: true,
        [`ct-input--${type}`]: true,
        'ct-input--required required': required
      }"
    >
      <!-- Textfield: text, email, tel, password -->
      <CTTextfield
        v-if="['date', 'email', 'number', 'password', 'tel', 'text'].includes(type)"
        v-bind="{ id: `input-${id}`, placeholder, required, type }"
        v-model="model"
      />

      <!-- Textarea -->
      <CTTextarea
        v-else-if="type === 'textarea'"
        v-bind="{ id: `input-${id}`, placeholder, required }"
        v-model="model"
      />

      <!-- Select -->
      <CTSelect
        v-else-if="type === 'select'"
        v-bind="{ error: !!error, id: `input-${id}`, options, placeholder, required }"
        v-model="model"
      />

      <!-- Radio -->
      <CTRadio
        v-else-if="type === 'radio'"
        v-bind="{ id: `input-${id}`, placeholder, required }"
        v-model="model"
      />

      <!-- Checkbox -->
      <CTCheckbox
        v-else-if="type === 'checkbox'"
        v-bind="{ id: `input-${id}`, label, placeholder, required }"
        v-model="model"
      />
    </div>

    <!-- Label: after -->
    <label
      v-if="isLabelAfter"
      :class="`ct-label ${themeClass} ct-label--regular`"
      :for="`input-${id}`"
      v-text="label"
    />

    <div
      v-if="description"
      class="ct-form-element__description"
      v-text="description"
    />

    <CTFieldMessage v-if="$slots.error || error" type="error"><slot name="error">{{ error }}</slot></CTFieldMessage>
  </div>
</template>

<script>
import ThemeMixin from '../mixins/theme'

export default {
  mixins: [ThemeMixin],

  props: {
    description: {
      type: String,
      default: undefined
    },
    error: {
      type: String,
      default: undefined
    },
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: undefined
    },
    labelPosition: {
      type: String,
      default: 'before'
    },
    options: {
      type: Array,
      default: () => ([]),
    },
    placeholder: {
      type: String,
      default: undefined
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
    },
  },

  data: ({ value }) => ({
    model: value
  }),

  computed: {
    isLabelAfter: ({ label, labelPosition, type }) => (label && labelPosition === 'after') && !['radio', 'checkbox'].includes(type),
    isLabelBefore: ({ label, labelPosition, type }) => !(!label || labelPosition !== 'before') && !['radio', 'checkbox'].includes(type)
  },

  watch: {
    model() {
      this.$emit('input', this.model)
    },

    value() {
      this.model = this.value
    }
  }
}
</script>
