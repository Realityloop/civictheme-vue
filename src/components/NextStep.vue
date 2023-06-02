<template>
  <div :class="`ct-next-step ${themeClass}`">
    <div class="container">
      <div class="row">
        <div class="col-xxs-12">
          <div class="ct-next-step__wrapper">
            <div class="ct-next-step__inner">
              <CTHeading class="ct-next-step__title" :level="4" :theme="theme">
                <CTLink
                  class="ct-next-step__title__link"
                  :link="link"
                  :text="title"
                  :theme="theme"
                  icon="right-arrow-2"
                />
              </CTHeading>

              <CTParagraph v-if="$slots['default']" class="ct-next-step__content" :theme="theme">
                <slot />
              </CTParagraph>
            </div>
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
    link: {
      type: String,
      default: '#'
    },
    title: {
      type: String,
      default: undefined
    }
  }
}
</script>
