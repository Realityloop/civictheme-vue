<template>
  <footer
    :class="`ct-footer ${themeClass}`"
    role="contentinfo"
    data-component-name="ct-footer"
  >
    <div
      v-if="hasContentTop"
      class="container ct-footer__top"
    >
      <div class="row">
        <div class="col-xs-12 col-m-6">
          <div
            v-if="$scopedSlots['content_top1']"
            class="ct-footer__top__content-top1"
          >
            <slot name="content_top1" />
          </div>
        </div>

        <div
          v-if="$scopedSlots['content_top2']"
          class="col-xs-12 col-m-6"
        >
          <div class="ct-footer__top__content-top2">
            <slot name="content_top2" />
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="hasContentMiddle"
      class="container ct-footer__middle"
    >
      <div class="row">
        <div class="col-xs-12 col-m-3">
          <div
            v-if="$scopedSlots['content_middle1']"
            class="ct-footer__middle__content-middle1"
          >
            <slot name="content_middle1" />
          </div>
        </div>

        <div class="col-xs-12 col-m-3">
          <div
            v-if="$scopedSlots['content_middle2']"
            class="ct-footer__middle__content-middle2"
          >
            <slot name="content_middle2" />
          </div>
        </div>

        <div class="col-xs-12 col-m-3">
          <div
            v-if="$scopedSlots['content_middle3']"
            class="ct-footer__middle__content-middle3"
          >
            <slot name="content_middle3" />
          </div>
        </div>

        <div class="col-xs-12 col-m-3">
          <div
            v-if="$scopedSlots['content_middle4']"
            class="ct-footer__middle__content-middle4"
          >
            <slot name="content_middle4" />
          </div>
        </div>
      </div>
    </div>

    <div class="container ct-footer__bottom">
      <div class="row">
        <div class="col-xs-12 col-m-7">
          <div class="ct-footer__bottom__content-bottom1">
            <slot name="content_bottom1" />
          </div>
        </div>

        <div class="col-xs-12 col-m-5">
          <div class="ct-footer__bottom__content-bottom2">
            <slot name="content_bottom2" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import ThemeMixin from '../mixins/theme'

export default {
  mixins: [ThemeMixin],

  computed: {
    hasContentMiddle:  ({ $scopedSlots }) => $scopedSlots['content_middle1'] || $scopedSlots['content_middle2'] || $scopedSlots['content_middle3'] || $scopedSlots['content_middle4'],
    hasContentTop: ({ $scopedSlots }) => $scopedSlots['content_top1'] || $scopedSlots['content_top2']
  }
}
</script>
