<template>
  <div class="container">
    <div class="row">
      <div class="col-xxs-12">
        <fieldset
          :class="`ct-fieldset ct-form-element ${themeClass} ct-form-element--default`"
        >
          <legend
            v-if="legend"
            class="ct-label"
          >
            <span v-text="legend" />
          </legend>

          <div class="ct-fieldset__wrapper">
            <div
              v-if="description || $scopedSlots.description"
              class="description"
            >
              <slot name="description">
                {{ description }}
              </slot>
            </div>

            <slot />
          </div>
        </fieldset>
      </div>
    </div>
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
    legend: {
      type: String,
      default: undefined
    }
  }
}
</script>
