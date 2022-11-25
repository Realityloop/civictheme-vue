<template>
  <CTBanner
    :title="title"
  />
</template>

<script>
import { DruxtBlocksRegionMixin } from 'druxt-blocks'

export default {
  mixins: [DruxtBlocksRegionMixin],

  computed: {
    title: ({ $store }) => ($store.state.druxtRouter.route || {}).label || ''
  }
}
</script>
