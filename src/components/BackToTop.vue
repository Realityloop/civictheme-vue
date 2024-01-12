<template>
  <div
    class="ct-back-to-top"
    data-component-name="back-to-top"
    data-scrollspy=""
    data-scrollspy-offset="400"
  >
    <CTButton
      class="ct-back-to-top__button"
      kind="link"
      :theme="theme"
      type="primary"
      url="#top"
      icon="up-arrow"
    />
  </div>
</template>

<script>
import ThemeMixin from "../mixins/theme"

export default {
  mixins: [ThemeMixin],

  created() {
    try {
      if (process.client) require('@civictheme/uikit/components/00-base/scrollspy/scrollspy')
    }
    catch(e) {
      // eslint-disable-next-line
      console.error(e)
    }
  }
}
</script>
