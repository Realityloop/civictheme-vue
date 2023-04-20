<template>
  <div
    class="ct-back-to-top"
    data-component-name="back-to-top"
    data-scrollspy=""
    data-scrollspy-offset="400"
  >
    <CTButton kind="link" :theme="theme" url="#top">
      <CTIcon class="ct-button__icon" symbol="up-arrow" :theme="theme" />
    </CTButton>
  </div>
</template>

<script>
import ThemeMixin from "../mixins/theme"

export default {
  mixins: [ThemeMixin],

  created() {
    try {
      if (process.client) require('civictheme/components/00-base/scrollspy/scrollspy')
    }
    catch(e) {
      // eslint-disable-next-line
      console.error(e)
    }
  }
}
</script>
