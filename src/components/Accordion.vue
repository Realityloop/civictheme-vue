<template>
  <div
    class="ct-accordion"
    :class="{
      [themeClass]: true,
      'ct-accordion--with-background': background
    }"
  >
    <div class="container">
      <div class="row">
        <div class="col-xxs-12">
          <!-- Slot: Content Top -->
          <div v-if="$slots['content_top']" class="ct-accordion__content-top">
            {{ content_top }}
          </div>

          <div class="ct-accordion__content">
            <ul class="ct-accordion__panels">
              <CTCollapsible
                v-for="(panel, delta) of panels"
                :collapsed="!expandAll && !panel.expanded"
                class="ct-accordion__panels__panel"
                data-collapsible-duration="250"
                data-collapsible-trigger-wide=""
                :key="`panel-${delta}`"
                panel-class="ct-accordion__panels__panel__content"
                tag="li"
              >
                <template #trigger>
                  <div class="ct-accordion__panels__panel__header">
                    <CTButton
                      class="ct-accordion__panels__panel__header__button"
                      data-collapsible-trigger=""
                      :text="panel.title"
                    />
                  </div>
                </template>

                <CTParagraph class="ct-accordion__panels__panel__content__inner">
                  <slot name="panel" :panel="panel">
                    {{ panel.content }}
                  </slot>
                </CTParagraph>
              </CTCollapsible>
            </ul>
          </div>

          <!-- Slot: Content Top -->
          <div v-if="$slots['content_bottom']" class="ct-accordion__content-bottom">
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
    background: {
      type: Boolean,
      default: false,
    },
    expandAll: {
      type: Boolean,
      default: false,
    },
    panels: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>
