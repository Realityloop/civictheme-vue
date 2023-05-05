<template>
  <div
    class="ct-subject-card"
    :class="{
      [themeClass]: true,
      'ct-subject-card--no-image': !hasImage
    }"
  >
    <div class="ct-subject-card__content">
      <!-- Slot: Image -->
      <div class="ct-subject-card__image">
        <slot
          v-if="hasImage"
          name="image"
        >
          <CTImage
            :alt="imageAlt"
            :src="imageSrc"
          />
        </slot>
      </div>

      <div
        v-if="$scopedSlots.image_over"
        class="ct-subject-card__image-over"
      >
        <!-- Slot: Image over -->
        <slot name="image_over" />
      </div>

      <!-- @TODO - CTHeading -->
      <div class="ct-subject-card__title">
        <CTLink
          class="ct-subject-card__title-link"
          :link="link"
          :theme="theme"
          :text="title"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ThemeMixin from '../mixins/theme'

export default {
  mixins: [ThemeMixin],

  props: {
    imageAlt: {
      type: String,
      default: undefined
    },
    imageSrc: {
      type: String,
      default: undefined,
    },
    link: {
      type: String,
      default: undefined
    },
    title: {
      type: String,
      default: undefined,
    }
  },

  computed: {
    hasImage: ({ imageSrc, $scopedSlots }) => imageSrc || $scopedSlots.image
  }
}
</script>
