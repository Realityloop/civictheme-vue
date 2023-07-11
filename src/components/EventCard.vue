<template>
  <div
    class="ct-event-card"
    :class="{
      [`${themeClass}`]: true,
      'ct-event-card--with-image': hasImage,
      'ct-event-card--image-over': $scopedSlots.image_over,
    }"
  >
    <div
      v-if="hasImage"
      class="ct-event-card__image"
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
        class="ct-event-card__image__over"
      >
        <!-- Slot: Image over -->
        <slot name="image_over" />
      </div>
    </div>

    <div class="ct-event-card__content">
      <!-- Slot: Content top -->
      <div
        v-if="$scopedSlots.content_top"
        class="ct-event-card__content-top"
      >
        <slot name="content_top" />
      </div>

      <!-- Date -->
      <CTTag
        class="ct-event-card__date"
        icon="calendar-2"
        :theme="theme"
        type="secondary"
        :value="date"
      />

      <!-- Title -->
      <CTHeading
        v-if="title"
        class="ct-event-card__title"
        :level="4"
        :theme="theme"
      >
        <CTLink
          class="ct-event-card__title__link"
          :link="link"
          :theme="theme"
          :text="title"
        />
      </CTHeading>

      <!-- Slot: Content middle -->
      <div
        v-if="$scopedSlots.content_middle"
        class="ct-event-card__middle"
      >
        <slot name="content_middle" />
      </div>

      <!-- Location -->
      <CTParagraph
        v-if="location"
        class="ct-event-card__location"
        :theme="theme"
      >
        {{ location }}
      </CTParagraph>

      <!-- Slot: Default/summary -->
      <CTParagraph class="ct-event-card__summary" :theme="theme">
        <slot>{{ summary }}</slot>
      </CTParagraph>

      <!-- Tags -->
      <div class="ct-event-card__tags">
        <CTTag
          v-for="tag of tags"
          :key="tag.id"
          :value="tag.value"
          :theme="theme"
        />

        <CTLink
          v-if="link"
          class="ct-event-card__tags__link ct-link--only-icon"
          icon="right-arrow-2"
          :link="link"
          text=""
          :theme="theme"
        />
      </div>

      <!-- Slot: Content bottom -->
      <div
        v-if="$scopedSlots.content_bottom"
        class="ct-event-card__content-bottom"
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
    link: {
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
    tags: {
      type: Array,
      default: () => ([]),
    },
    title: {
      type: String,
      default: undefined,
    }
  },

  computed: {
    hasImage: ({ $scopedSlots, imageSrc }) => imageSrc || $scopedSlots.image
  }
}
</script>
