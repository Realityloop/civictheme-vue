<template>
  <div
    class="ct-accordion"
    :class="{
      [themeClass]: true,
      [backgroundClass]: true,
    }"
  >
    <div class="container">
      <div class="row">
        <div class="col-xxs-12">
          <div class="ct-accordion__content">
            <ul class="ct-accordion__panels">

              <li
                v-for="item of items"supplie
                :key="item.id"
                class="ct-accordion__panels__panel"
                data-collapsible="true"
                data-collapsible-collapsed=""
                data-collapsible-duration="250"
                data-collapsible-trigger-wide="">
                <div class="ct-accordion__panels__panel__header">
                  <CTButton
                    :aria-expanded="expanded"
                    class="ct-accordion__panels__panel__header__button"
                    data-collapsible-trigger=""
                    kind="link"
                    icon="arrow-right"
                    icon-class="ct-icon ct-collapsible__icon"
                    icon-position="after"
                    :text="title"
                  />
                </div>
                <div class="ct-accordion__panels__panel__content" data-collapsible-panel="" aria-hidden="true">
                  <slot
                    class="ct-accordion__panels__panel__content__inner"
                    name="item"
                    :item="item"
                  >
                    <component
                      :is="itemComponent"
                      v-bind="item"
                    />
                  </slot>
                  <!-- <div
                    class="
                      ct-paragraph
                      ct-paragraph--regular
                      ct-accordion__panels__panel__content__inner"
                      :class="{
                        [themeClass]: true,
                      }"
                    >
                    {{ content }}
                  </div> -->
                </div>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ThemeMixin from "../mixins/theme";

export default {
  mixins: [ThemeMixin],

  props: {
    id: {
      type: String,
      default: '0'
    },
    background: {
      type: Boolean,
      default: false,
    },
    expanded: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
  },

  methods: {
    onClick() {
      this.$emit('toggle', this.id)
    }
  }
}
</script>
