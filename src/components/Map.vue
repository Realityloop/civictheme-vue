<template>
  <div :class="`ct-map ${themeClass}`">
    <div class="container">
      <div class="row">
        <div class="col-xxs-12">
          <div class="ct-map__canvas">
            <CTIFrame
              class="ct-map__iframe"
              :src="url"
              :title="address"
            />
          </div>

          <CTButton
            v-if="viewUrl"
            class="ct-map__link"
            icon="upper-right-arrow"
            kind="link"
            text="View in Google Maps"
            :theme="theme"
            type="tertiary"
            :url="viewUrl"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ThemeMixin from '../mixins/theme'

export default {
  mixins: [ThemeMixin],

  props: {
    address: {
      type: String,
      default: undefined
    },
    url: {
      type: String,
      required: true
    },
    viewUrl: {
      type: String,
      default: undefined
    }
  },
}
</script>
