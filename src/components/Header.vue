<template>
  <header :class="`ct-header ${themeClass}`" role="banner">
    <div v-if="hasTop" class="ct-header__top">
      <div v-if="$scopedSlots['content_top1']" class="container">
        <div class="row">
          <div class="col-xxs-12">
            <div class="ct-header__content-top1">
              <div class="story-slot story-slot--content_top1">
                <slot name="content_top1" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="$scopedSlots['content_top2'] || $scopedSlots['content_top3']" class="container">
        <div class="row">
          <div class="col-xxs-12 col-m-6">
            <div class="ct-header__content-top2">
              <slot name="content_top2" />
            </div>
          </div>

          <div class="col-xxs-12 col-m-6">
            <div class="ct-header__content-top3">
              <slot name="content_top3" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Middle -->
    <div v-if="hasMiddle" class="ct-header__middle">
      <div class="container">
        <div class="row">
          <div class="col-xxs-12">
            <div class="ct-header__content-middle1">
              <div class="story-slot story-slot--content_middle1">
                <slot name="content_middle1" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-xxs-6">
            <div class="ct-header__content-middle2">
              <slot name="content_middle2" />
            </div>
          </div>

          <div class="col-xxs-6">
            <div
              class="
                ct-header__content-middle3
                ct-header__content-middle3--ctio
              "
            >
              <slot name="content_middle3" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xxs-12">
          <div class="ct-header__content-bottom1">
            <div class="story-slot story-slot--content_bottom1">
              <slot name="content_bottom1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ThemeMixin from '../mixins/theme'

export default {
  mixins: [ThemeMixin],

  computed: {
    hasTop: ({ $scopedSlots }) => $scopedSlots['content_top1'] || $scopedSlots['content_top2'] || $scopedSlots['content_top3'],
    hasMiddle: ({ $scopedSlots }) => $scopedSlots['content_middle1'] || $scopedSlots['content_middle2'] || $scopedSlots['content_middle3'],
  }
}
</script>
