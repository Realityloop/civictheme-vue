<template>
  <div :class="`ct-publication-card ${themeClass}`">
    <div
      v-if="hasImage"
      class="ct-publication-card__image"
    >
      <!-- Slot: Image -->
      <slot name="image">
        <CTImage
          :alt="imageAlt"
          :src="imageSrc"
        />
      </slot>
      <div
        v-if="$scopedSlots.image_over"
        class="ct-publication-card__image-over"
      >
        <!-- Slot: Image over -->
        <slot name="image_over" />
      </div>
    </div>

    <div class="ct-publication-card__content">
      <!-- Slot: Content top -->
      <div
        v-if="$scopedSlots.content_top"
        class="ct-publication-card__content-top"
      >
        <slot name="content_top" />
      </div>

      <CTHeading
        v-if="title"
        class="ct-publication-card__title"
        :level="4"
        :theme="theme"
      >
        <CTLink class="ct-publication-card__title__link" :link="linkUrl" :theme="theme">
          {{ title }} <CTIcon class="ct-link__icon" symbol="download" />
        </CTLink>
      </CTHeading>

      <!-- Slot: Content middle -->
      <div
        v-if="$scopedSlots.content_middle"
        class="ct-publication-card__content-middle"
      >
        <slot name="content_middle" />
      </div>

      <!-- Slot: Default/summary -->
      <CTParagraph class="ct-publication-card__summary" :theme="theme">
        <slot>{{ summary }}</slot>
      </CTParagraph>

      <CTLink
        class="ct-publication-card__link"
        :link="linkUrl"
        :text="linkText || title"
        :theme="theme"
      />

      <!-- Slot: Content bottom -->
      <div
        v-if="$scopedSlots.content_bottom"
        class="ct-publication-card__content-bottom"
      >
        <slot name="content_bottom" />
      </div>
    </div>
  </div>
</template>

<script>
import ThemeMixin from '../mixins/theme'

export default {
  mixins: [ThemeMixin],

  props: {
    date: {
      type: String,
      default: undefined
    },
    imageAlt: {
      type: String,
      default: undefined
    },
    imageSrc: {
      type: String,
      default: undefined,
    },
    linkUrl: {
      type: String,
      default: undefined
    },
    linkText: {
      type: String,
      default: undefined
    },
    location: {
      type: String,
      default: undefined
    },
    summary: {
      type: String,
      default: undefined,
    },
    title: {
      type: String,
      default: '',
    }
  },

  computed: {
    hasImage: ({ $scopedSlots, imageSrc }) => imageSrc || $scopedSlots.image
  }
}
</script>
