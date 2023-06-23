<template>
  <div
    class="ct-banner"
    :class="{
      [themeClass]: true,
      'ct-banner--decorative': decorative
    }"
  >
    <div class="ct-banner__wrapper">
      <div
        :class="`ct-banner__inner ct-background--${blendMode}`"
        :style="{
          backgroundImage: background && `url('${background}')`
        }"
      >
        <div class="container">
          <!-- Slot: Content Top 1 -->
          <div v-if="$slots['content_top1']" class="row">
            <div class="col-xxs-12">
              <div class="ct-banner__content-top">
                <slot name="content_top1" />
              </div>
            </div>
          </div>

          <!-- Breadcrumbs -->
          <div
            v-if="hasBreadcrumbs || $slots['content_top2']"
            class="row"
          >
            <div class="col-xxs-12 col-m-6">
              <slot v-if="hasBreadcrumbs" name="breadcrumbs">
                <CTBreadcrumb :breadcrumbs="breadcrumbs" class="ct-banner__breadcrumb" :theme="theme" />
              </slot>
            </div>

            <!-- Slot: Content Top 2 -->
            <div v-if="$slots['content_top2']" class="col-xxs-12 col-m-6">
              <div class="ct-banner__content-top2">
                <slot name="content_top2" />
              </div>
            </div>
          </div>

          <!-- Slot: Content Top 3 -->
          <div class="row" v-if="$slots['content_top3']">
            <div class="col-xxs-12">
              <div class="ct-banner__content-top3">
                {{ content_top3 }}
              </div>
            </div>
          </div>

          <!-- Section -->
          <div v-if="section" class="row">
            <div class="col-xxs-12">
              <CTHeading
                class="ct-banner__site-section"
                :level="5"
                :text="section"
                :theme="theme"
              />
            </div>
          </div>

          <!-- Title -->
          <div class="row">
            <div class="col-xxs-12 col-m-6">
              <div class="ct-banner__title">
                <slot name="title">
                  <CTHeading
                    :level="1"
                    :text="title"
                    :theme="theme"
                  />
                </slot>
              </div>
            </div>
          </div>

          <!-- Slot: Middle -->
          <div class="row" v-if="$slots['content_middle']">
            <div class="col-xxs-12 col-m-6">
              <div class="ct-banner__content-middle">
                <slot name="content_middle" />
              </div>
            </div>
          </div>

          <!-- Slot: Default -->
          <div v-if="$slots['default']" class="row">
            <div class="col-xxs-12 col-m-6">
              <div class="ct-banner__content">
                <slot />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Featured image -->
      <div
        v-if="imageSrc"
        class="ct-banner__featured-image__wrapper"
      >
        <CTImage
          :alt="imageAlt"
          class="ct-banner__featured-image"
          :src="imageSrc"
          :theme="theme"
        />
      </div>
    </div>

    <!-- Slot: Content bottom -->
    <div class="container" v-if="$slots['content_middle']">
      <div class="row">
        <div class="col-xxs-12">
          <div class="ct-banner__content-bottom">
            <slot name="content_bottom" />
          </div>
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
    background: {
      type: String,
      default: undefined
    },
    blendMode: {
      type: String,
      default: 'normal'
    },
    breadcrumbs: {
      type: [Boolean, Array],
      default: false
    },
    decorative: {
      type: Boolean,
      default: false
    },
    imageAlt: {
      type: String,
      default: undefined
    },
    imageSrc: {
      type: String,
      default: undefined,
    },
    section: {
      type: String,
      default: undefined,
    },
    title: {
      type: String,
      required: true
    },
  },

  computed: {
    hasBreadcrumbs: ({ $slots, breadcrumbs }) => !!(breadcrumbs || $slots['breadcrumbs'])
  }
}
</script>
