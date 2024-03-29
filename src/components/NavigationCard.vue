<template>
  <div :class="`ct-navigation-card ${themeClass}`">
    <div
      v-if="hasImage"
      class="ct-navigation-card__image"
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
        class="ct-navigation-card__image-over"
      >
        <!-- Slot: Image over -->
        <slot name="image_over" />
      </div>
    </div>

    <div class="ct-navigation-card__content">
      <!-- Slot: Content top -->
      <div
        v-if="$scopedSlots.content_top"
        class="ct-navigation-card__content-top"
      >
        <slot name="content_top" />
      </div>

      <!-- @TODO - Icon -->

      <!-- Title -->
      <CTHeading
        v-if="title"
        class="ct-navigation-card__title"
        :level="4"
      >
        <CTLink
          class="ct-navigation-card__title__link"
          :external="isExternal"
          :link="link"
          :text="title"
          :theme="theme"
          :icon="linkIcon"
        />
      </CTHeading>

      <!-- Slot: Content middle -->
      <div
        v-if="$scopedSlots.content_middle"
        class="ct-navigation-card__content-middle"
      >
        <slot name="content_middle" />
      </div>

      <!-- Slot: Default/summary -->
      <CTParagraph class="ct-navigation-card__summary" :theme="theme">
        <slot>{{ summary }}</slot>
      </CTParagraph>

      <!-- Slot: Content bottom -->
      <div
        v-if="$scopedSlots.content_bottom"
        class="ct-navigation-card__content-bottom"
      >
        <slot name="content_bottom" />
      </div>
    </div>
  </div>
</template>

<script>
import ThemeLink from '../mixins/link'
import ThemeMixin from '../mixins/theme'

export default {
  mixins: [ThemeLink, ThemeMixin],

  props: {
    imageAlt: {
      type: String,
      default: undefined
    },
    imageSrc: {
      type: String,
      default: undefined,
    },
    summary: {
      type: String,
      default: undefined,
    },
    title: {
      type: String,
      default: undefined,
    }
  },

  computed: {
    hasImage: ({ $scopedSlots, imageSrc }) => imageSrc || $scopedSlots.image,
    linkIcon: ({ isExternal }) => isExternal ? 'upper-right-arrow' : 'right-arrow-2',
    isExternal: ({ link, linkExternal }) => {
      if (linkExternal) return true
      if (!link) return false
      try {
        const urlObj = new URL(link)
        if (typeof window !== 'undefined' && window?.location?.host === urlObj?.host) return false
        return ['http:', 'https:'].includes(urlObj?.protocol)
      } catch(err) { return false }
    },
  }
}
</script>
