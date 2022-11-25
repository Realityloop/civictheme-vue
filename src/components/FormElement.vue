<template>
  <div class="container">
    <div class="row">
      <div class="col-xxs-12">
        <div
          :class="`ct-form-element ${themeClass} ct-form-element--${type} ct-form-element--label--undefined ct-form-element--label--after`"
        >
          <label
            v-if="label"
            :class="`ct-label ${themeClass} ct-label--regular`"
            :for="`input-${id}`"
            v-text="label"
          />

          <div
            class="ct-input ct-input--default"
            :class="{
              [themeClass]: true,
              [`ct-input--${type}`]: true,
              'ct-input--required required': this.required
            }"
            :id="`input-${id}`"
          >
            <component
              :is="element"
              :class="`ct-textfield ct-input__element ${themeClass}`"
              :placeholder="placeholder"
              :id="`input-${id}`"
              v-bind="props"
              @input="onInput"
            >{{ model }}</component>
          </div>

          <div v-if="description" class="ct-form-element__description" v-text="description" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ThemeMixin from '../mixins/theme.mjs'

export default {
  mixins: [ThemeMixin],

  props: {
    description: {
      type: String,
      default: undefined
    },
    id: {
      type: String,
      require: true
    },
    label: {
      type: String,
      default: undefined
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
      type: String,
      default: undefined
    },
  },

  data: ({ value }) => ({
    model: value
  }),

  computed: {
    element: ({ type }) => ({
      email: 'input',
      password: 'input',
      text: 'input',
      textarea: 'textarea'
    }[type]),

    props: ({ type, value }) => ({
      email: {
        type: 'email',
        value,
      },
      password: {
        type: 'password',
        value,
      },
      text: {
        type: 'text',
        value,
      },
      textarea: {
        rows: 5,
      }
    }[type])
  },

  methods: {
    onInput(e) {
      this.model = e.target.value
    }
  },

  watch: {
    model() {
      this.$emit('input', this.model)
    }
  }
}
</script>
