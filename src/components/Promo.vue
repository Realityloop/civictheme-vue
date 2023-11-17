<template>
  <div
    class="ct-promo"
    :class="{
      [themeClass]: true,
    }"
  >
    <div class="container">
      <div class="row">
        <div class="col-xxs-12">
          <div v-if="$slots['content_top']" class="ct-promo__content-top">
            {{ content_top }}
          </div>

          <div class="ct-promo__wrapper">
            <div class="ct-promo__inner">
              <CTHeading
                :level="4"
                :text="title"
                :theme="theme"
              />

              <CTParagraph class="ct-promo__content" :theme="theme">
                <slot>
                  <div v-html="content" />
                </slot>
              </CTParagraph>
            </div>

            <div class="ct-promo__links">
              <slot name="links">
                <CTButton
                  class="ct-promo__button"
                  kind="link"
                  :theme="theme"
                  size="large"
                  :text="linkText"
                  :type="linkButtonType"
                  :url="linkUrl"
                />
              </slot>
            </div>
          </div>

          <div v-if="$slots['content_bottom']" class="ct-promo__content-bottom">
            {{ content_bottom }}
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
    linkButtonType: {
      type: String,
      default: 'secondary'
    },
    linkText: {
      type: String,
      default: undefined
    },
    linkUrl: {
      type: String,
      default: undefined
    },
    content: {
      type: String,
      default: undefined,
    },
    title: {
      type: String,
      default: undefined,
    }
  }
}
</script>
