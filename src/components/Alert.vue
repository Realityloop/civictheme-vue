<template>
  <div
    class="ct-alert"
    :class="{
      [themeClass]: true,
      [`ct-alert--${type}`]: type
    }"
    :data-alert-id="id"
    :data-alert-type="type"
    data-component-name="ct-alert"
    role="alert"
  >
    <div class="container">
      <div class="row">
        <div class="ct-alert__title col-xxs-12 col-m-3">
          <span class="ct-alert__icon">
            <CTIcon :symbol="icon" />
          </span>
          {{ title }}
        </div>

        <div class="ct-alert__summary col-xxs-12 col-m-9">
          <slot />

          <CTButton
            class="ct-alert__dismiss-button"
            data-alert-dismiss-trigger=""
            :id="`dismiss-alert-${id}`"
            icon="close"
            type="tertiary"
            :title="`close ${type} alert`"
            data-button="true"
            @click.native.prevent="onClick"
          />
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
    title: {
      type: String,
      default: undefined,
    },
    type: {
      type: String,
      default: 'information',
    },
  },

  computed: {
    icon: ({ type }) =>
      ({
        error: 'close-outline',
        information: 'information-mark',
        warning: 'exclamation-mark-1',
        success: 'approve',
      }[type] || 'information-mark'),
  },

  methods: {
    onClick() {
      this.$emit('close', this.id)
    }
  }
}
</script>
